import React, { Component } from 'react'
import ProductCard from './ProductCard';

export default class DemoProps extends Component {

    productObj ={
        id:1,
        name: "SamSung",
        price:2000,
        url:"https://source.unsplash.com/random/?samsung",
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <ProductCard productName={this.productObj}/>
                        {/* productName là thuộc tính tự đặt */}
                    </div>
                </div>
            </div>
    )
    }
}
