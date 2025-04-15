import Navbar from "@/components/Navbar";
import Cultura from "@/pages/Cultura";
import Home from "@/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cultura" element={<Cultura />} />
      </Routes>
    </Router>
  );
}

export default App;
