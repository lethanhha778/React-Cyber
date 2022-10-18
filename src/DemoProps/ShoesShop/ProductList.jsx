import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderArry = () => {
        console.log(this.props.data);
        return this.props.data.map((sneaker, index) => {
            return <div className="col-4" key={index} >
                <ProductItem sneaker={sneaker} />
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderArry()}
            </div>
        )
    }
}
