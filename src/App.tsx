import Cultura from "@/pages/Cultura";
import Home from "@/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cultura" element={<Cultura />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
