#!/bin/bash
# Kasia → Blotato Social Media Poster
# Usage: ./post_to_social.sh <video_url> <caption> <platform>

BLOTATO_API_KEY="${BLOTATO_API_KEY:-SETUP_REQUIRED}"
VIDEO_URL="$1"
CAPTION="$2"
PLATFORM="${3:-tiktok}"

if [ "$BLOTATO_API_KEY" = "SETUP_REQUIRED" ]; then
    echo "ERROR: BLOTATO_API_KEY nicht gesetzt. PERSONA.md zuerst ausfüllen!"
    exit 1
fi

echo "[Blotato] Posting to $PLATFORM..."
RESPONSE=$(curl -s -X POST "https://api.blotato.com/v2/posts" \
    -H "Authorization: Bearer $BLOTATO_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"content\":{\"text\":\"$CAPTION\",\"mediaUrls\":[\"$VIDEO_URL\"]},\"target\":{\"platform\":\"$PLATFORM\"}}")

echo "[Blotato] Response: $RESPONSE"
SUBMISSION_ID=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('postSubmissionId','ERROR'))" 2>/dev/null)
echo "[Blotato] Submission ID: $SUBMISSION_ID"
