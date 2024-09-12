import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/cart.css'; // Import the CSS for styling
import { removeFromCart } from '../store/cartActions';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart); 
    const totalBill = items.reduce((total, item) => total + item.price, 0);


    const handleRemove = (e, product) => {
        e.preventDefault();
        dispatch(removeFromCart(product));
    };

    return (
        <div className="page-container">
            {items.length === 0 ? (
                <div className="empty-cart-message">
                     <h2 style={{fontSize: '2rem',
                                color: '#007bff', 
                                marginBottom: '20px'}}>Your cart is empty</h2>
                    <Link to="/products" className="shop-now-btn">Shop Now</Link>
                </div>
            ) : (
                <div className="item-list">
                    {items.map(item => (
                        <div className="list-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="list-item-image" />
                            <div className="item-details">
                                <span className="item-name">{item.name}</span>
                                <span>{item.title}</span>
                                <span className="item-price">${item.price}</span>
                            </div>
                            <button className="remove-btn" onClick={(event) => handleRemove(event, item)}>
                                    Remove
                                </button>
                        </div>
                    ))}
                    
                    <div className="cart-summary">
                        <span className="total-bill">Total: ${totalBill.toFixed(2)}</span>
                        <button className="purchase-btn" onClick={() => alert('Purchase functionality not implemented')}>
                            Purchase
                        </button>
                    </div>
               </div>
               
            )}
        </div>
    );
};

export default Cart;
