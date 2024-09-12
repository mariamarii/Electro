
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (product) => (dispatch) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== product.id); // Avoid duplicates
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });
  };
  
  export const removeFromWishlist = (product) => (dispatch) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== product.id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: product,
    });
  };
