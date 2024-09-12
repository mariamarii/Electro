export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product) => (dispatch) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== product.id); // Avoid duplicates
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
  
  export const removeFromCart = (product) => (dispatch) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };