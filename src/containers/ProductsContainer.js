import React, {Component} from 'react';
import { connect } from 'react-redux';
// redux store - ProductsContainer - Products(reactjs)// trung gian ket noi  
import Products from './../components/Products';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products products = { products }/>
        );
    }
}

//change state : products in store -> props(products)
const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);
