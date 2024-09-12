import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authActions';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.css'; // Add your custom CSS if needed

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData)).then(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        if (storedUser.role === 'seller') {
          navigate('/seller-dashboard');
        } else {
          navigate('/products');
        }
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">
              <i className="bi bi-person-circle"></i>
            </span>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
