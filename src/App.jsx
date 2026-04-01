import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import "./App.css";
import AnimeDetails from "./pages/AnimeDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Layout() {
  const location = useLocation();

  return (
    <>
    

    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/anime/:id" element={<AnimeDetails />} /> 
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
</Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}






export default App;