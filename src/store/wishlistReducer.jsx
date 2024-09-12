

import {  ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './wishlistActions';

const initialState = {

  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  
};

const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};



export default wishlistReducer;
