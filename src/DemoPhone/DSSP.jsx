import React, { Component } from 'react'
import SP from './SP'

export default class DSSP extends Component {
    renderPhone = () =>{
        return this.props.dataPhone.map((phone)=>{
            return  <div className="col-4" key={phone.maSP}>
            <SP phone={phone} showDetail={this.props.showDetail} />
        </div>
        })
    }
    render() {
        return (
            <div className="row">
                    {this.renderPhone()}
            </div>
        )
    }
}
