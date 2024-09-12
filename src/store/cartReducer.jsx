
import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActions';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      case 'REMOVE_FROM_CART':
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  };
  

export default cartReducer;
