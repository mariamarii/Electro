import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/productDetail.css'

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products && products.length > 0) {
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      setProduct(selectedProduct);
    }
  }, [id, products]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.model} />
      </div>
      <div className="product-info">
        <h2>{product.model}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
