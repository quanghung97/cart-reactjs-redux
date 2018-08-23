import React, {Component} from 'react';
import { connect } from 'react-redux';
// redux store - ProductsContainer - Products(reactjs)// trung gian ket noi
import Products from './../components/Products';
import Product from './../components/Product';

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
        if (products.length > 0) {
            result = products.map((product, index) => {
                //add props for each product
                return <Product key = {index} product = {product}/>
            });
        }
        return result;
    }
}

//change state : products in store -> props(products)
const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);
