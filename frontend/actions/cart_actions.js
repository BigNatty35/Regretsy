import * as CartUtil from "../util/cart_item_util";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";


export const receiveCartItems = (cartItems) => {
  return {
    type: RECEIVE_CART_ITEMS,
    cartItems
  };
};

export const receiveCartItem = (cartItem) => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItem
  };
};

export const removeCartItem = (item) => {
  return {
    type: REMOVE_CART_ITEM,
    itemId: item.id
  };
};



export const fetchCartItems = () => {
  return dispatch => {
    return CartUtil.fetchCartItems().then(cartItems => {
      return dispatch(receiveCartItems(cartItems));
    });
  };
};
export const fetchCartItem = (id) => {
  return dispatch => {
    return CartUtil.fetchCartItem(id).then(cartItems => {
      return dispatch(receiveCartItems(cartItems));
    });
  };
};


export const createCartItem = (item) => {
  return dispatch => {
    return CartUtil.createCartItem(item).then(cartItem => {
      return dispatch(receiveCartItem(cartItem));
    });
  };
};


export const deleteCartItem = id => {
  return dispatch => {
    return CartUtil.deleteCartItem(id).then(itemId => {
      return dispatch(removeCartItem(itemId));
    });
  };
};