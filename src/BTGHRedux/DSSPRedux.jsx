import React, { Component } from 'react'
import SPRedux from './SPRedux'

export default class DSSPRedux extends Component {
    renderPhone =()=>{
        return this.props.dataPhone.map((phone) => {
            return <div className="col-4" key={phone.maSP}>
                <SPRedux phone={phone} />
            </div>
        })
    }
  render() {
    return (
      <div className='row py-5'>
            {this.renderPhone()}
      </div>
    )
  }
}
