import React, {Component} from 'react';
import { connect } from 'react-redux';
// redux store - ProductsContainer - Products(reactjs)// trung gian ket noi
import Products from './../components/Products';
import Product from './../components/Product';
//import Prop types checking
import PropTypes from 'prop-types';
import { actAddToCart } from './../actions/index';
import { actChangeMessage } from './../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }

    //index all products
    showProducts(products) {
        var result = null;
        var { onChangeMessage, onAddToCart } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                //add props for each product
                return <Product
                             key = {index}
                             product = {product}
                             onAddToCartInChild = {onAddToCart} //action to props send this prop onAddToCartInChild to Product and run with param
                             onChangeMessage = { onChangeMessage }
                         />
            });
        }
        return result;
    }
}

//checking props types in products
ProductsContainer.propTypes = {
  products : PropTypes.arrayOf(
      PropTypes.shape({
          id : PropTypes.number.isRequired,
          name : PropTypes.string.isRequired,
          image : PropTypes.string.isRequired,
          description : PropTypes.string.isRequired,
          inventory : PropTypes.number.isRequired,
          rating : PropTypes.number.isRequired
      })
  ).isRequired,
  onChangeMessage : PropTypes.func.isRequired
};

//change state : products in store -> props(products)
const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCart(product, 1));//config dispatch prepare to get data in actions with props onAddToCartInChild
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
