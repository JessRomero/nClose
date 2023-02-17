import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage'
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage'
import HomePage from '../HomePage/HomePage';
import ProductsPage from '../ProductsPage/ProductsPage';
import { products } from "../../data.js";
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage products={products} />} />
            <Route path="/products/:productName" element={<ProductDetailPage products={products} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}



