import React from 'react';
import CartItem from './cart_item';


class CartShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total: 0
    };

 
  }

  componentDidMount() {
   
    this.props.fetchCartItems();
   

  }

  
  render() {
    let totalSum = 0;
    this.props.cartItems.forEach(cartItem => {
      totalSum += (cartItem.price * cartItem.quantity);
    });
    const total = this.props.cartItems.length != 1 ? `${this.props.cartItems.length} items in your cart` :
    "1 item in your cart";
    return (
      <div className="cartItems-box">
        <div className="header-box">
        <header className="cart-header">
        <h1 className="total-header">{total}</h1>
        </header>
        </div>
        <div className="main-cart-area">
          <div className='cartItems-list'>
          {this.props.cartItems.map(cartItem => {
            return <CartItem cartItem={cartItem} cartItems={this.props.cartItems} key={cartItem.id}
            deleteCartItem={this.props.deleteCartItem} updateCartItem={this.props.updateCartItem}/>;
          })}
          </div>
          <div className="checkout">
            <div className="grandTotal">
              <h1>${totalSum.toFixed(2)} is your total </h1>
            </div>
        </div>
      </div>
      </div>
    );
  }
 }


export default CartShow;




