import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'

import HomePage from './pages/HomePage'
import PhilosophiePage from './pages/PhilosophiePage'
import AjmanGuidePage from './pages/AjmanGuidePage'
import SteuerWissenPage from './pages/SteuerWissenPage'
import ProzessPage from './pages/ProzessPage'
import PreisRechnerPage from './pages/PreisRechnerPage'
import UeberUnsPage from './pages/UeberUnsPage'
import BlogPage from './pages/BlogPage'
import BlogArticlePage from './pages/BlogArticlePage'
import KontaktPage from './pages/KontaktPage'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/philosophie" element={<PhilosophiePage />} />
            <Route path="/ajman-guide" element={<AjmanGuidePage />} />
            <Route path="/steuer-wissen" element={<SteuerWissenPage />} />
            <Route path="/prozess" element={<ProzessPage />} />
            <Route path="/preis-rechner" element={<PreisRechnerPage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}