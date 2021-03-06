import ProductDetail from './product_detail';
import {connect} from 'react-redux';
import {fetchProduct} from '../../actions/product_actions';
import {createCartItem} from '../../actions/cart_actions';
import {withRouter} from 'react-router-dom';
import { fetchReviews, createReview} from '../../actions/review_actions';
import {clearErrors} from '../../actions/review_actions';


const msp = (state, ownProps) => {
  const currentProduct = state.entities.products[ownProps.match.params.product_id];

  return {
    product: currentProduct,
    // user: state.entities.users[currentProduct.user_id]
    userId: state.session.id,
    // username: state.entities.users[state.session.id].username,
    errors: state.errors.cart
    // reviews: currentProduct.reviews
  };
};



const mdp = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: item => dispatch(createCartItem(item)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    createReview: review => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors())
  };
};




export default withRouter(connect(msp, mdp)(ProductDetail));