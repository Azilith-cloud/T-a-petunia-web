import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlautaAnimation from './components/FlautaAnimation'
import Promociones from './components/Promociones'
import Menu from './components/Menu'
import Especialidad from './components/Especialidad'
import About from './components/About'
import EventForm from './components/EventForm'
import Footer from './components/Footer'
import PromocionesPage from './pages/PromocionesPage'
import MenuPage from './pages/MenuPage'
import QuickSelection from './components/QuickSelection'
import WhatsAppButton from './components/WhatsAppButton'

function HomePage() {
  return (
    <>
      <Hero />
      <QuickSelection />
      <FlautaAnimation />
      <Promociones />
      <Menu />
      <Especialidad />
      <About />
      <EventForm />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
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
