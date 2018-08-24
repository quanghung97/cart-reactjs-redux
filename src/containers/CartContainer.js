import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <div></div>
        );
    }
}

//checking props types in cart
CartContainer.propTypes = {
  cart : PropTypes.arrayOf(PropTypes.shape({
      product : PropTypes.shape({
          id : PropTypes.number.isRequired,
          name : PropTypes.string.isRequired,
          image : PropTypes.string.isRequired,
          description : PropTypes.string.isRequired,
          inventory : PropTypes.number.isRequired,
          rating : PropTypes.number.isRequired
      }).isRequired,
      quantity : PropTypes.number.isRequired
  })).isRequired
};

//change state : Cart in store -> props(products)
const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);
