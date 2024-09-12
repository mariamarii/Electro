import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productActions';
import '../style/productList.css';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../store/cartActions';
import { addToWishlist, removeFromWishlist } from '../store/wishlistActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart || []);
  const wishlist = useSelector((state) => state.wishlist || []);
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  const toggleDescription = (id) => {
    setExpandedProductId((prevId) => (prevId === id ? null : id));
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product, e) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
  };

  const handleAddToWishlist = (product, e) => {
    e.preventDefault();
    dispatch(addToWishlist(product));
  };

  const handleRemoveFromWishlist = (product, e) => {
    e.preventDefault();
    dispatch(removeFromWishlist(product));
  };

  // Filter products based on the selected category
  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{`Error: ${error}`}</h2>;

  return (
    <div className="product-list-container">
      <h2 className="text-center my-4">Product List</h2>

      {/* Category Filter */}
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by category:</label>
        <select 
          id="category-filter" 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isInCart = cart.some(item => item.id === product.id);
            const isInWishlist = wishlist.some(item => item.id === product.id);

            return (
              <div key={product.id} className="product-card">
                <div className="image-container">
                  <div className="product-actions">
                    {isInCart ? (
                      <button
                        className="btn small-btn"
                        onClick={(e) => handleRemoveFromCart(product, e)}
                      >
                        <i className="bi bi-bag-fill"></i>
                      </button>
                    ) : (
                      <button
                        className="btn small-btn"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        <i className="bi bi-bag"></i>
                      </button>
                    )}
                    {isInWishlist ? (
                      <button
                        className="btn small-btn"
                        onClick={(e) => handleRemoveFromWishlist(product, e)}
                      >
                        <i className="bi bi-heart-fill"></i>
                      </button>
                    ) : (
                      <button
                        className="btn small-btn"
                        onClick={(e) => handleAddToWishlist(product, e)}
                      >
                        <i className="bi bi-heart"></i>
                      </button>
                    )}
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image w-full h-full object-contain"
                  />
                </div>
                <div className="product-card-body">
                  <Link to={`/products/${product.id}`}>
                    <h5 className={`product-description ${expandedProductId === product.id ? 'expanded' : ''}`}>
                      {product.model}
                    </h5>
                  </Link>
                  <h5 className="product-price">{product.price}$</h5>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
