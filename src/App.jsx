import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/global.css";

import Home from "./pages/Home";
import Product from "./pages/AllProductAndServices/Product";
import Service from "./pages/AllProductAndServices/Service";
import Client from "./pages/Client";
import Employee from "./pages/Employee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
