import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import AuthPage from '../AuthPage/AuthPage'
import ProductsPage from '../ProductsPage/ProductsPage'

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/orders" element={<NewOrderPage />} />
          <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}



