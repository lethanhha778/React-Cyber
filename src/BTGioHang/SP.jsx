import React, { Component } from 'react'

export default class SP extends Component {
    
    render() {
        let{phone}= this.props
        return (
            <div className="card">
                <img className="card-img-top" src={phone.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{phone.tenSP}</h4>
                    <p className="card-text">{phone.giaBan.toLocaleString()} vnđ</p>
                    <button onClick={() => {this.props.addToCart(phone)}} data-toggle="modal" data-target="#modelId" className="btn btn-danger">Thêm Giỏ Hàng</button>
                </div>
            </div>
        )
    }
}
