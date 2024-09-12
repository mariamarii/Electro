import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/wishlist.css'; // Import the CSS for styling
import { removeFromWishlist } from '../store/wishlistActions';
import { Link } from 'react-router-dom';

const WishList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.wishlist); // Adjust according to your state structure

    const handleRemove = (e, product) => {
        e.preventDefault();
        dispatch(removeFromWishlist(product));
    };

    return (
        <div className="page-container">
            {items.length === 0 ? (
                <div className="empty-cart-message">
                    <h2 style={{fontSize: '2rem',
                                color: '#007bff', 
                                marginBottom: '20px',
                                alignItems: 'center'
                            }}>
                            Your Wish List is empty</h2>
                    <Link to="/products" className="shop-now-btn">Shop Now</Link>
                </div>
            ) : (
                <div className="item-list">
                    {items.map(item => (
                        <div className="list-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="list-item-image" />
                            <div className="item-details">
                                <span className="item-name">{item.name}</span>
                                <span >{item.title}</span>
                                <span className="item-price">${item.price}</span>
                                
                            </div>
                            <button className="remove-btn" onClick={(event) => handleRemove(event, item)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishList;
