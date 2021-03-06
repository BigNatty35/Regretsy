import {RECEIVE_CART_ERRORS} from '../actions/cart_actions';
import {RECEIVE_CURRENT_USER, CLEAR_ERRORS} from '../actions/session_actions';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CART_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
      default:
       return state;
  }
};




