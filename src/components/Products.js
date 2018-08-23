import React, {Component} from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class Products extends Component {
    render() {
        var { products } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">

                    { this.showProducts(products) }

                </div>
            </section>
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

export default connect(mapStateToProps, null)(Products);
