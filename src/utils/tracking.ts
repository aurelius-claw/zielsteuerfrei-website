declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const bookingConfirmationKey = 'zielsteuerfrei.booking-confirmation'
const consentKey = 'zielsteuerfrei.cookie-consent'
const attributionKey = 'zielsteuerfrei.marketing-attribution'
const calendlyUrl = 'https://calendly.com/nenope82/30min'

export type ConsentChoice = 'granted' | 'denied'

export interface BookingConfirmation {
  reference: string
  scheduledAt: string
  sourcePath: string
}

export function trackEvent(event: string, details: Record<string, unknown> = {}) {
  const payload = {
    page_path: window.location.pathname,
    ...details,
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...payload })

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, payload)
  }
}

export function trackGenerateLead(details: Record<string, unknown> = {}) {
  trackEvent('generate_lead', details)
}

export function openCalendlyWidget(source = 'unknown') {
  trackEvent('calendly_open', { source })
  trackEvent('calendly_cta_click', { source })

  if (typeof window.Calendly !== 'undefined') {
    window.Calendly.initPopupWidget({ url: calendlyUrl })
  } else {
    window.open(calendlyUrl, '_blank')
  }
}

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(consentKey)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function updateConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(consentKey, choice)
  } catch {
    // Consent still updates for the current page view.
  }

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
      analytics_storage: choice,
    })
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'consent_update',
    consent_state: choice,
  })
}

export function captureMarketingAttribution() {
  const params = new URLSearchParams(window.location.search)
  const fields = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const attribution: Record<string, string> = {}

  fields.forEach(field => {
    const value = params.get(field)
    if (value) attribution[field] = value
  })

  if (Object.keys(attribution).length === 0) return

  attribution.landing_page = window.location.pathname
  attribution.captured_at = new Date().toISOString()

  try {
    window.localStorage.setItem(attributionKey, JSON.stringify(attribution))
  } catch {
    // Attribution storage is best-effort until a real CRM/backend exists.
  }
}

export function trackPageView(path: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    })
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'virtual_page_view',
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function rememberBookingConfirmation(sourcePath: string): BookingConfirmation {
  const confirmation = {
    reference: typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `booking-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    scheduledAt: new Date().toISOString(),
    sourcePath,
  }

  try {
    window.sessionStorage.setItem(bookingConfirmationKey, JSON.stringify(confirmation))
  } catch {
    // Tracking still works when session storage is unavailable.
  }

  return confirmation
}

export function getBookingConfirmation(): BookingConfirmation | null {
  try {
    const value = window.sessionStorage.getItem(bookingConfirmationKey)
    if (!value) return null

    const confirmation = JSON.parse(value) as BookingConfirmation
    if (!confirmation.reference || !confirmation.scheduledAt || !confirmation.sourcePath) return null
    return confirmation
  } catch {
    return null
  }
}
