import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

interface LayoutProps {
  children: React.ReactNode
}

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

const primaryLinks = [
  { path: '/', label: 'Home', exact: true },
  { path: '/preis-rechner', label: 'Preise' },
  { path: '/ueber-uns', label: 'Über Uns' },
]

const menuLinks = [
  { path: '/philosophie', label: 'Die Idee' },
  { path: '/ajman-guide', label: 'Ajman vs Dubai' },
  { path: '/steuer-wissen', label: 'Steuer-Wissen' },
  { path: '/prozess', label: 'Der Weg' },
  { path: '/blog', label: 'Blog' },
  { path: '/kontakt', label: 'Kontakt' },
]

const footerLinks = [
  { path: '/philosophie', label: 'Die Idee' },
  { path: '/ajman-guide', label: 'Ajman vs Dubai' },
  { path: '/steuer-wissen', label: 'Steuer-Wissen' },
  { path: '/prozess', label: 'Der Weg' },
  { path: '/preis-rechner', label: 'Preis-Rechner' },
  { path: '/ueber-uns', label: 'Über Uns' },
  { path: '/blog', label: 'Blog' },
]

function openCalendly() {
  // @ts-ignore
  if (typeof Calendly !== 'undefined') {
    // @ts-ignore
    Calendly.initPopupWidget({ url: 'https://calendly.com/zielsteuerfrei/strategie-call' })
  } else {
    window.open('https://calendly.com/zielsteuerfrei/strategie-call', '_blank')
  }
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      setStickyVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const linkClass = (isActive: boolean) =>
    `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
      isActive
        ? 'text-gold bg-gold/[0.08]'
        : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-cream hover:bg-ink-100/50 dark:hover:bg-navy-800/60'
    }`

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-navy-950 text-ink-900 dark:text-cream transition-colors duration-300">

      {/* ── Navigation ──────────────────────────────────── */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 dark:bg-navy-950/90 backdrop-blur-nav border-b border-ink-100/60 dark:border-navy-800/60 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Startseite">
              <span className="text-xl leading-none select-none">🎯</span>
              <span className="font-display text-xl font-bold tracking-tight text-ink-900 dark:text-cream">
                Ziel<span className="text-gold">:</span>steuerfrei
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">

              {primaryLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.exact}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Menü dropdown */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(v => !v)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    menuOpen
                      ? 'text-gold bg-gold/[0.08]'
                      : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-cream hover:bg-ink-100/50 dark:hover:bg-navy-800/60'
                  }`}
                >
                  Menü
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className={`absolute right-0 top-full mt-2 w-52 rounded-2xl border border-ink-100 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-card-hover transition-all duration-200 origin-top-right ${
                  menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <div className="p-2">
                    {menuLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                            isActive
                              ? 'text-gold bg-gold/[0.08]'
                              : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-cream hover:bg-ink-100/60 dark:hover:bg-navy-800'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                    <div className="mt-2 pt-2 border-t border-ink-100 dark:border-navy-800">
                      <button
                        onClick={() => { setMenuOpen(false); openCalendly() }}
                        className="w-full btn-primary text-sm py-2.5"
                      >
                        Termin buchen
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Farbmodus wechseln"
                className="ml-1 w-9 h-9 rounded-lg flex items-center justify-center text-ink-500 dark:text-ink-300 hover:text-ink-900 dark:hover:text-cream hover:bg-ink-100/60 dark:hover:bg-navy-800 transition-all duration-150"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </nav>

            {/* Mobile: theme + burger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Farbmodus wechseln"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-500 dark:text-ink-300 hover:bg-ink-100/60 dark:hover:bg-navy-800 transition-colors"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={() => setMobileOpen(v => !v)}
                aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={mobileOpen}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-700 dark:text-ink-300 hover:bg-ink-100/60 dark:hover:bg-navy-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu — alle Links */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[700px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col gap-0.5 pt-3 border-t border-ink-100/60 dark:border-navy-800/60">
              {[...primaryLinks, ...menuLinks].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={'exact' in link ? link.exact : false}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold bg-gold/[0.08]'
                        : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-cream hover:bg-ink-100/50 dark:hover:bg-navy-800/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={openCalendly}
                className="mt-3 btn-primary w-full text-sm py-3"
              >
                🗓 Termin buchen
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main content ────────────────────────────────── */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* ── Sticky CTA ──────────────────────────────────── */}
      <div className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        stickyVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-navy-900/96 dark:bg-navy-950/96 backdrop-blur-sm border-t border-gold/20 py-3 px-4">
          <div className="max-w-wide mx-auto flex items-center justify-between gap-4">
            <p className="text-sm text-cream/80 hidden sm:block">
              🎯 Komplettpaket ab <span className="text-gold font-bold">€6.990</span> · 0% Steuern · 4 Tage Setup
            </p>
            <button onClick={openCalendly} className="btn-primary text-sm px-5 py-2.5 ml-auto">
              Kostenlosen Call buchen
            </button>
          </div>
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="bg-navy-900 dark:bg-navy-950 text-ink-300 border-t border-navy-800">
        <div className="max-w-wide mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            <div className="md:col-span-1">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                <span className="text-lg leading-none">🎯</span>
                <span className="font-display text-xl font-bold text-cream">
                  Ziel<span className="text-gold">:</span>steuerfrei
                </span>
              </Link>
              <p className="text-sm text-ink-400 leading-relaxed mb-4">
                Deutschlands günstigster Weg zur Steuerfreiheit. Fair. Transparent. Ohne Hype.
              </p>
              <p className="text-xs text-ink-500">Zuletzt aktualisiert: März 2026</p>
            </div>

            <div>
              <h4 className="font-display text-base font-semibold text-cream mb-4">Seiten</h4>
              <ul className="space-y-2.5">
                {footerLinks.map(link => (
                  <li key={link.path}>
                    <NavLink to={link.path} className="text-sm text-ink-400 hover:text-gold transition-colors duration-150">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-semibold text-cream mb-4">Rechtliches</h4>
              <ul className="space-y-2.5">
                <li><NavLink to="/impressum" className="text-sm text-ink-400 hover:text-gold transition-colors">Impressum</NavLink></li>
                <li><NavLink to="/datenschutz" className="text-sm text-ink-400 hover:text-gold transition-colors">Datenschutz</NavLink></li>
                <li><NavLink to="/kontakt" className="text-sm text-ink-400 hover:text-gold transition-colors">Kontakt</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-semibold text-cream mb-4">Strategie-Call</h4>
              <p className="text-sm text-ink-400 leading-relaxed mb-4">
                20 Minuten. Kostenlos. Wir klären, ob Ajman für dich passt.
              </p>
              <button onClick={openCalendly} className="btn-primary w-full text-sm py-3">
                Termin buchen
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-navy-800">
            <p className="text-xs text-ink-500 leading-relaxed mb-3 max-w-3xl">
              ⚠️ Kein Steuer- oder Rechtsberatungsangebot. Ziel:steuerfrei übernimmt Firmengründung und strategische Begleitung. Für steuerliche Fragen empfehlen wir qualifizierte Steuerberater.
            </p>
            <p className="text-xs text-ink-600">© 2026 Ziel:steuerfrei. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}