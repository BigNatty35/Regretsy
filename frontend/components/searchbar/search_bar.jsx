import React from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import {fetchSearchProduct} from '../../actions/product_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '' 
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ query: e.target.value });
  }



  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchProduct(this.state.query).then(() => {
      this.props.history.push('/search');
    });
  }

  render() {
    return (
      <form className="searchform" onSubmit={this.onFormSubmit} >
      <div className="searchbox">
        <input
          placeholder="Search for items"
          className="search-field"
          value={this.state.query}
          onChange={this.onInputChange} />

        <span className="outer-search">
          <button type='submit' className="search-button">Search</button>
        </span>
        </div>
      </form>
    );
  }
}


const msp = (state, ownProps) => {
  return {
    products: Object.values(state.entities.products)
  };
};


const mdp = dispatch => {
  return {
    fetchSearchProduct: query => dispatch(fetchSearchProduct(query))
  };
};


export default withRouter(connect(msp, mdp)(SearchBar));