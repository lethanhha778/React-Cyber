import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        console.log(this.props.productName);
        let p = this.props.productName
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={p.url} alt="Card" />
                    <div className="card-body text-center">
                        <h5 className="card-title ">{p.name}</h5>
                        <p className="card-text">{p.price}$</p>
                        <a href="#!" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        )
    }
}
