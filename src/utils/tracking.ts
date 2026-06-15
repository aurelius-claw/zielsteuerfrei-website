declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

const bookingConfirmationKey = 'zielsteuerfrei.booking-confirmation'

export interface BookingConfirmation {
  reference: string
  scheduledAt: string
  sourcePath: string
}

export function trackEvent(event: string, details: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...details })
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
