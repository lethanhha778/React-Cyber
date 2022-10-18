import React, { Component } from 'react'
import KetQua from './KetQua';
// import XucXacImg  from '../asset/img/1.png';
// import XucXacImg2  from '../asset/img/2.png';
// import XucXacImg3  from '../asset/img/3.png';
import './xiu.css';
import XucXac from './XucXac';

// chỉ nên dùng import cho ảnh logo 
// nên đặt ảnh thay đổi ở public

export default class GameTaiXiu extends Component {
  render() {
    return (
      <div className='container-fluid py-5 bg-Game'>
        <h1 className='text-center' style={{ fontSize: 70, fontWeight: 'bold' }}>CÒN THỞ LÀ PHẢI GỠ</h1>
        {/* <img src={XucXacImg} alt="" style={{width:100}}/>
            <img src={XucXacImg2} alt="" style={{width:100}}/>
            <img src={XucXacImg3} alt="" style={{width:100}}/> */}
        <XucXac />
        <KetQua />


      </div>
    )
  }
}
