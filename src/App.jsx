import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/global.css";

import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
