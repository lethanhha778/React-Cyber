import React, { Component } from 'react'
import SP from './SP'

export default class DSSPA extends Component {
    renderPhoneList = () => {
        return this.props.dataPhone.map((phone) => {
            return <div className="col-4" key={phone.maSP}>
                <SP phone={phone} addToCart={this.props.addToCart}/>
            </div>
        })
    }
    render() {
        return (
            <div className="row py-5">
                {this.renderPhoneList()}
            </div>
        )
    }
}
