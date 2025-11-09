import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import ErrorPath from './landing_page/ErrorPath';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Login from './landing_page/signup/Login';
import { AuthProvider } from './landing_page/context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <AuthProvider>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<ErrorPath/>}/>
    </Routes>
    <Footer />
    </AuthProvider>
  </BrowserRouter>
);

