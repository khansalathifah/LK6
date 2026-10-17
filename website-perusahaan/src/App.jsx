import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "components/Navbar"
import Footer from "./components/Footer"
import Home from "/pages/Home.jsx"
import About from "/pages/About"
import Services from "/pages/Services"
import Galeri from "/pages/Galeri"
import Contacs from "/pages/Contacs"


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/portofolio" element={<Galeri />} />
          <Route path="/contacs" element={<Contacs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
