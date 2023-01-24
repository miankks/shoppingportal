import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import Privacypolicy from './pages/Privacypolicy';
import Refundpolicy from './pages/Refundpolicy';
import Shippingpolicy from './pages/Shippingpolicy';
import Termsandcond from './pages/Termsandcond';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/:id' element={<Singleblog />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='contact' element={<Contact />} />
            <Route path='forgotpassword' element={<Forgotpassword />} />
            <Route path='login' element={<Login />} />
            <Route path='product' element={<OurStore />} />
            <Route path='privacypolicy' element={<Privacypolicy />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='resetpassword' element={<Resetpassword />} />
            <Route path='refundpolicy' element={<Refundpolicy />} />
            <Route path='shippingpolicy' element={<Shippingpolicy />} />
            <Route path='signup' element={<Signup />} />
            <Route path='termsandconditions' element={<Termsandcond />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
