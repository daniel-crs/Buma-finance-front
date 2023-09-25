import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/global.css";

import Home from "./pages/Home";
import Product from "./pages/AllProductAndServices/Product";
import Service from "./pages/AllProductAndServices/Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
