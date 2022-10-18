import React, { Component } from 'react'
import FormDK from './FormDK'
import TBDSach from './TBDSach'

export default class BTQLNguoiDung extends Component {
  render() {
    return (
      <div className='container py-5'>
        <h1 className='text-center'>Quản Lý Người Dùng</h1>
        <FormDK/>
        <TBDSach/>
      </div>
    )
  }
}
