import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import ProductList from './pages/ProductList';
import './App.css';
import './style/productList.css';
import NavBar from './pages/navBar';
import './style/navBar.css';
import ProductDetails from './pages/ProductDetails';
import { useSelector } from 'react-redux';
import Register from './pages/Register';
import Login from './pages/Login';
import SellerDashboard from './pages/SellerDashboard';
import WishlistPage from './pages/WishList';
import CartPage from './pages/Cart';

const App = () => {
  const authState = useSelector((state) => state.auth);
  const { user, isAuthenticated } = authState;

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <>
            {user.role === 'customer' ? (
              <>
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} /> 
                <Route path="*" element={<Navigate to="/products" />} />
              </>
            ) : (
              <>
                <Route path="/seller-dashboard" element={<SellerDashboard />} />
                <Route path="*" element={<Navigate to="/seller-dashboard" />} />
              </>
            )}
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
