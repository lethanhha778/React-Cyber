import React, { Component } from 'react'

export default class BangCT extends Component {
  render() {
    let {phoneCT} = this.props;
    return (
      <div className="row py-5">
        <div className="col-4">
          <h2 className="card-title text-center">{phoneCT.tenSP}</h2>
          <img className="card-img-top" src={phoneCT.hinhAnh} alt="Card" />
        </div>
        <div className="col-8">
          <h3>Thông Số Kỹ Thuật</h3>
          <table className="table">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr className='p-2'>
                <td>Màng Hình:</td>
                <td>{phoneCT.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ Điều Hành:</td>
                <td>{phoneCT.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Màng Hình:</td>
                <td>{phoneCT.manHinh}</td>
              </tr>
              <tr>
                <td>Camera Trước:</td>
                <td>{phoneCT.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera Sau:</td>
                <td>{phoneCT.cameraSau}</td>
              </tr>
              <tr>
                <td>Ram:</td>
                <td>{phoneCT.ram}</td>
              </tr>
              <tr>
                <td>Rom:</td>
                <td>{phoneCT.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
