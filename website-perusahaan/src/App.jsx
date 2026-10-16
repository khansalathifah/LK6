import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
    return (
        <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<About />} />
      </Routes>
      </>
    );
}

export default App;