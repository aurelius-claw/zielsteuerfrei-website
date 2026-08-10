import { useEffect, useState } from 'react'
import { getStoredConsent, trackPageView, updateConsent } from '../utils/tracking'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(() => !getStoredConsent())

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) updateConsent(stored)
  }, [])

  if (!visible) return null

  const choose = (choice: 'granted' | 'denied') => {
    updateConsent(choice)
    if (choice === 'granted') {
      trackPageView(window.location.pathname)
    }
    setVisible(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-ink-100 bg-cream-50/98 px-4 py-4 shadow-[0_-18px_60px_rgba(13,48,66,0.16)] backdrop-blur-md dark:border-navy-800 dark:bg-navy-950/98">
      <div className="mx-auto flex max-w-wide flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-ink-900 dark:text-cream">
            Cookies & Messung
          </p>
          <p className="mt-1 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
            Wir nutzen Google Analytics und Google Ads erst nach deiner Zustimmung für Statistik und Kampagnenmessung.
            Notwendige Funktionen bleiben immer aktiv.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="inline-flex items-center justify-center border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-800 transition-colors hover:border-gold hover:text-gold dark:border-navy-700 dark:text-ink-300"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="inline-flex items-center justify-center bg-gold px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-gold-light"
          >
            Zustimmen
          </button>
        </div>
      </div>
    </div>
  )
}
