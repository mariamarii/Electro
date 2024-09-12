import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../store/authActions';
import { useNavigate } from 'react-router';
import '../style/register.css'; // Add your custom CSS if needed

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'customer' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(formData));
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      // Optionally set an error message state here
    }
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register</h2>
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
          <div className="input-group">
            <span className="input-icon">
              <i className="bi bi-person-badge"></i>
            </span>
            <select
              name="role"
              className="form-control"
              onChange={handleChange}
              value={formData.role}
              required
            >
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="login-link">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
