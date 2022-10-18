import React, { Component, Fragment } from 'react'

export default class ProductItem extends Component {
    render() {
        let { image, name, price } = this.props.sneaker
        return (
            <div className="card" style={{ minHeight: 500 }}>
                <img className="card-img-top" src={image} alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}$</p>
                    <a href="#!" className="btn btn-primary">ADD TO CARD</a>
                </div>
            </div>

        )
    }
}
