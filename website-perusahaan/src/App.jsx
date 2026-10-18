import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contacts'
import Galeri from './pages/Galeri'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;