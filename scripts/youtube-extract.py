#!/usr/bin/env python3
"""
YouTube Video Extractor
Gets transcripts and metadata from YouTube videos.
Usage: python youtube-extract.py <youtube_url>
"""
import sys
import json

# Try using youtube-transcript-api first
try:
    from youtube_transcript_api import YouTubeTranscriptApi
    TRANSCRIPT_AVAILABLE = True
except ImportError:
    TRANSCRIPT_AVAILABLE = False
    print("WARNING: youtube-transcript-api not installed", file=sys.stderr)

# Try importing yt-dlp
try:
    import yt_dlp
    YTDLP_AVAILABLE = True
except ImportError:
    YTDLP_AVAILABLE = False
    print("WARNING: yt-dlp not installed", file=sys.stderr)


def extract_video_id(url):
    """Extract YouTube video ID from various URL formats."""
    from urllib.parse import urlparse, parse_qs
    
    parsed = urlparse(url)
    
    if parsed.netloc == 'youtu.be':
        return parsed.path[1:]
    
    if parsed.netloc in ('www.youtube.com', 'youtube.com'):
        if parsed.path == '/watch':
            return parse_qs(parsed.query).get('v', [None])[0]
        if parsed.path.startswith('/embed/'):
            return parsed.path.split('/')[2]
        if parsed.path.startswith('/v/'):
            return parsed.path.split('/')[2]
    
    return None


def get_transcript(video_id):
    """Get transcript using youtube-transcript-api."""
    if not TRANSCRIPT_AVAILABLE:
        return None, "youtube-transcript-api not installed"
    
    try:
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        full_text = ' '.join([item['text'] for item in transcript_list])
        return full_text, None
    except Exception as e:
        return None, str(e)


def get_metadata(url):
    """Get metadata using yt-dlp."""
    if not YTDLP_AVAILABLE:
        return None, "yt-dlp not installed"
    
    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'extract_flat': False,
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=False)
            return {
                'title': info.get('title', 'N/A'),
                'description': info.get('description', 'N/A'),
                'uploader': info.get('uploader', 'N/A'),
                'upload_date': info.get('upload_date', 'N/A'),
                'view_count': info.get('view_count', 0),
                'duration': info.get('duration', 0),
                'channel_url': info.get('channel_url', 'N/A'),
                'thumbnail': info.get('thumbnail', 'N/A'),
            }, None
    except Exception as e:
        return None, str(e)


def main():
    if len(sys.argv) < 2:
        print("Usage: python youtube-extract.py <youtube_url>")
        sys.exit(1)
    
    url = sys.argv[1]
    video_id = extract_video_id(url)
    
    if not video_id:
        print(json.dumps({"error": "Could not extract video ID from URL"}, indent=2))
        sys.exit(1)
    
    print(f"Extracting: {url}", file=sys.stderr)
    result = {
        "video_id": video_id,
        "url": url,
    }
    
    # Get metadata
    metadata, meta_error = get_metadata(url)
    if metadata:
        result["metadata"] = metadata
    if meta_error:
        result["metadata_error"] = meta_error
    
    # Get transcript
    transcript, trans_error = get_transcript(video_id)
    if transcript:
        result["transcript"] = transcript[:50000]  # Limit to ~50K chars
        result["transcript_length"] = len(transcript)
    if trans_error:
        result["transcript_error"] = trans_error
    
    print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
