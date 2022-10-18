import React, { Component } from 'react'

export default class Shop extends Component {
    
    renderModal = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={`phone${index}`}>
                <td className='text-center'>{spGH.maSP}</td>
                <td>
                    <img style={{width:'40px'}} src={spGH.hinhAnh} alt="" />
                </td>
                <td>{spGH.tenSP}</td>
                <td>
                    <button className='btn btn-success'onClick={() =>{this.props.changeSL(spGH.maSP,+1)}}>+</button>
                        <span className='mx-1'>{spGH.soLuong}</span>
                    <button className='btn btn-success'onClick={() =>{this.props.changeSL(spGH.maSP,-1)}}>-</button>
                </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                <td>
                    <button onClick={() => {this.props.clearSP(spGH.maSP) }} className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog  modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã Sản Phẩm</th>
                                        <th>Hình Ảnh</th>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Số Lượng</th>
                                        <th>Đơn Giá</th>
                                        <th>Thành Tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderModal()}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
