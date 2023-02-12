import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import AuthPage from '../AuthPage/AuthPage'
import ProductsPage from '../ProductsPage/ProductsPage'

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      <NavBar />
      {user ?
        <Routes>
          <Route path="/orders" element={<NewOrderPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        :
        <AuthPage />
      }
    </main>
  );
}



