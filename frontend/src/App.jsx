import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'; 

import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdminAddProduct from './pages/AdminAddProduct'; // Admin form to add products
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<AdminAddProduct />} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/register" element={<Register/>} /> 
          <Route path="/product/:id" element={<ProductDetails />} />

        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
