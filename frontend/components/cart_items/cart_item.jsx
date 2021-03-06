import React from 'react';
import {Link} from 'react-router-dom';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      quantity: this.props.cartItem.quantity
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.cartItem.quantity = this.state.quantity;
    let item = this.props.cartItem;
    item.quantity = 
    this.props.updateCartItem(item);
  }

  handleQuant(e) {
    this.setState({quantity: e.target.value});
  }

  render() {
    const each = this.state.quantity > 1 ?
     `($${this.props.cartItem.price} each)` : undefined;
    
 

    return (
    <div className="cartItem-info">
    
          <div className="sec0">
          <div className="sec1">
            {this.props.cartItem.product_name}

          </div>
          <Link to={`/product/${this.props.cartItem.product_id}`}>
            <div className="cart-image">
              <img src={this.props.cartItem.product_img} alt="" />
            </div>
            </Link>
          <div className="remove-item-box">
            <button className="remove-item" onClick={() => {
              this.props.deleteCartItem(this.props.cartItem.id);
              this.props.clearErrors();
            }}>Remove
              </button>
          </div>
          </div>

      

          <div className="sec2">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label> 
              <div className="qbox">
                <p>Quantity:</p>
            <select className="cart-item-quantity" value={this.state.quantity}
              className="dropdown"
              onChange={this.handleQuant.bind(this)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>
            </div>
              </label>
              {/* <div className="quant-submit"> */}
                <button className="quant-submit" onClick={this.handleSubmit.bind(this)}>
                update
                </button>
              {/* </div> */}
           
            </form>
          </div>


        <div className="quant-sec">
        <div className="sub">
        ${(this.props.cartItem.quantity * this.props.cartItem.price).toFixed(2)}
        </div>
          <div className="cart-item-price">
            {each}
          </div>
        </div>
        </div>

        
        
             
  );
  }
}

export default CartItem;
