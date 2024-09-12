import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authActions'; // Ensure to import the logout action
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/navBar.css';

function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    const { isAuthenticated, user } = authState;

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            navigate('/login'); // Redirect to login page after logout
        });
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand mx-3" to="/">ELECTRO</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    {isAuthenticated ? (
                        <>
                            {user.role !== 'seller' && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/cart" className="nav-link"><i className="bi bi-bag-fill mx-1"></i>Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/wishlist" className="nav-link"><i className="bi bi-heart-fill mx-1"></i>WishList</Link>
                                    </li>
                                </>
                            )}
                            {user.role === 'seller' && (
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <span className="nav-link">Welcome ({user.username})!</span>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
