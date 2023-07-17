import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "../pages/About";
import Blouses from "../pages/Blouses";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Delivery from "../pages/Delivery";
import Dresses from "../pages/Dresses";
import FAQ from "../pages/FAQ";
import Favourite from "../pages/Favourite";
import HomePage from "../pages/HomePage";
import Jackets from "../pages/Jackets";
import Regulations from "../pages/Regulations";
import Returns from "../pages/Returns";
import Sale from "../pages/Sale";
import Shoes from "../pages/Shoes";
import Trousers from "../pages/Trousers";
import User from "../pages/User";
import "../styles/App.css";
import "../styles/Reset.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>{<Header />}</header>
        <nav>{<Navbar />}</nav>
        <Routes>
          <Route path="/favourite" element={<Favourite />} />;
          <Route path="/user" element={<User />} />;
          <Route path="/cart" element={<Cart />} />;
          <Route path="/" exact element={<HomePage />} />;
          <Route path="/blouses" element={<Blouses />} />;
          <Route path="/dresses" element={<Dresses />} />;
          <Route path="/trousers" element={<Trousers />} />;
          <Route path="/jackets" element={<Jackets />} />;
          <Route path="/shoes" element={<Shoes />} />;
          <Route path="/sale" element={<Sale />} />;
          <Route path="/faq" element={<FAQ />} />;
          <Route path="/delivery" element={<Delivery />} />;
          <Route path="/returns" element={<Returns />} />;
          <Route path="/about" element={<About />} />;
          <Route path="/regulations" element={<Regulations />} />;
          <Route path="/contact" element={<Contact />} />;
        </Routes>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
