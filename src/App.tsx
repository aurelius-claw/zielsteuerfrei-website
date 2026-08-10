import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

const PhilosophiePage = lazy(() => import('./pages/PhilosophiePage'))
const FreeZoneVergleichPage = lazy(() => import('./pages/AjmanGuidePage'))
const SteuerWissenPage = lazy(() => import('./pages/SteuerWissenPage'))
const ProzessPage = lazy(() => import('./pages/ProzessPage'))
const PreisRechnerPage = lazy(() => import('./pages/PreisRechnerPage'))
const UeberUnsPage = lazy(() => import('./pages/UeberUnsPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'))
const KontaktPage = lazy(() => import('./pages/KontaktPage'))
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'))
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'))
const TerminBestaetigtPage = lazy(() => import('./pages/TerminBestaetigtPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Seite wird geladen">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/philosophie" element={<PhilosophiePage />} />
              <Route path="/ajman-guide" element={<Navigate to="/free-zone-vergleich" replace />} />
              <Route path="/free-zone-vergleich" element={<FreeZoneVergleichPage />} />
              <Route path="/steuer-wissen" element={<SteuerWissenPage />} />
              <Route path="/prozess" element={<ProzessPage />} />
              <Route path="/preis-rechner" element={<PreisRechnerPage />} />
              <Route path="/ueber-uns" element={<UeberUnsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogArticlePage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />
              <Route path="/termin-bestaetigt" element={<TerminBestaetigtPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
