import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'; 

import Navbar  from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import AdminAddProduct from './Pages/AdminAddProduct'; // Admin form to add products
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ScrollToTop from './Components/ScrollToTop';
import ProductCategoryPage from './Pages/ProductCategoryPage';
import HomeDecorDetails from './Pages/HomeDecorDetails';
import MuralProductDetails from './Pages/MuralProductDetails';



function App() {
  return (
    <Provider store={store} className="mt-[96px] flex-grow">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:category" element={<ProductCategoryPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/admin" element={<AdminAddProduct />} /> 
            <Route path="/login" element={<Login/>} /> 
            <Route path="/register" element={<Register/>} /> 
            <Route path="/homedecor/:id" element={<HomeDecorDetails />} />
            <Route path="/mural/:id" element={<MuralProductDetails />} />

        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
