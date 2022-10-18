import React, { Component } from 'react'

export default class SP extends Component {
    render() {
        let{phone,showDetail} = this.props;
        return (
            <div className="card " style={{minHeight:500}}>
                <img className="card-img-top" src={phone.hinhAnh} alt="Card" style={{minHeight:348}}/>
                <div className="card-body">
                    <h5 className="card-title">{phone.tenSP}</h5>
                    <h5 className="card-title">${phone.giaBan}</h5>
                    <button onClick={() => showDetail(phone)} className="btn btn-success">Xem Chi Tiết</button>
                </div>
            </div>
        )
    }
}
