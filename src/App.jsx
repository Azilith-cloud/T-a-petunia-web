import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlautaAnimation from './components/FlautaAnimation'
import Promociones from './components/Promociones'
import Menu from './components/Menu'
import Especialidad from './components/Especialidad'
import About from './components/About'
import CEO from './components/CEO'
import EventForm from './components/EventForm'
import Footer from './components/Footer'
import PromocionesPage from './pages/PromocionesPage'
import MenuPage from './pages/MenuPage'
import QuickSelection from './components/QuickSelection'
import WhatsAppButton from './components/WhatsAppButton'
import { Helmet } from 'react-helmet-async'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Tía Petunia | Gorditas, Flautas y Quesadillas en Zapopan, Jalisco</title>
        <meta name="description" content="Tía Petunia — Gorditas, flautas, quesadillas y la famosa gordita de chilaquiles en Zapopan, Jalisco. Más de 11 años de sabor casero. Pide a domicilio o visítanos." />
        <link rel="canonical" href="https://tiapetunia.com.mx/" />
      </Helmet>
      <main>
        <Hero />
        <QuickSelection />
        <FlautaAnimation />
        <Promociones />
        <Menu />
        <Especialidad />
        <About />
        <CEO />
        <EventForm />
      </main>
      <Footer />
    </>
  )
}

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Retry scrolling until the element is found (page may still be rendering)
      let attempts = 0
      const tryScroll = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else if (attempts < 10) {
          attempts++
          setTimeout(tryScroll, 200)
        }
      }
      setTimeout(tryScroll, 150)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/promociones" element={<PromocionesPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
