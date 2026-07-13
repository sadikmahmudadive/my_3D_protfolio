import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Home, About, Projects, Contact } from "./pages"

const App = () => {
  return (
    <main className="page-shell min-h-screen text-slate-100">
      <Router>
        <div className="page-layer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </main>
  )
}

export default App
