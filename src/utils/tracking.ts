declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export function trackEvent(event: string, details: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...details })
}
