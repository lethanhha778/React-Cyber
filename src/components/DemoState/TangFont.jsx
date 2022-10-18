import React, { Component } from 'react'

export default class TangFont extends Component {
    
    // fontS = 16
    state = {
        fontS:16
    }

    changeSize =(num)=>{
        this.setState({
            fontS: this.state.fontS + num
        })
    }

  render() {
    // let fsize ={
    //     fontSize:"30px",    
    //     padding:"0px 20px"
    // }
    return (
      <div className='container py-5 text-center'>
            <h1 className='py-3'> Tăng Giảm Size</h1>
            <button onClick={() => {this.changeSize(-1)}}  className='btn btn-warning'>-</button>
            <span style={{fontSize:`${this.state.fontS}px`}}>Tăng Font Đi</span>
            <button onClick={() => {this.changeSize(1)}} className='btn btn-success'>+</button>
      </div>
    )
  }
}
