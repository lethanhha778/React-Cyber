import React, { Component } from 'react'
// kết nối store
import { connect} from 'react-redux'

class GioHangRedux extends Component {
      
    renderModal = () => {
        console.log(this.props)
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
                    <button onClick={() => {  
                        // trong cùng 1 component chỉ nên dùng 1 cách
                        //C1: sử dụng hàm dispatch của redux
                        // const action = {
                        //     type:'XOA_SP',
                        //     maSPXoa: spGH.maSP
                        // }
                        // this.props.dispatch(action)
                        //C2
                        this.props.xoaSP(spGH.maSP)
                    }} className='btn btn-danger'>Xóa</button>
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


// C2 sử dụng hàm định nghĩa lại tên của dispatch
// truyền tham số dispatch (this.props.dispatch) vào hàm
const mapDispatchToProps = (dispatch)=>{
    // return vào props 1 hàm dispatch mới
    return{
        xoaSP: (maSP) => { 
            let action = {
                    type:'XOA_SP',
                    maSPXoa: maSP,
                }
                // tham số dispactch đc truyền vào hàm mapDispatchToProps
                dispatch(action)
        },
        changeSL:(maSP,sl)=>{
            let action ={
                type:'CHANGE_SL',
                maSPDoi:maSP,
                soLuong:sl
            }
            dispatch(action)
        }
        
    }
}


// Tạo hàm lấy giá trị (state) từ store của redux
//mapStateToProps => đem state từ redux lưu xún props của component
const mapStateToProps = (rootReducer)=>{

    // lưu state vào props của cpn
    return{
        gioHang: rootReducer.gioHangReducer
    }
}

// tạo ra 1 cpn mới bao gồm tính năng class cpn của react và tính năng của redux
// mapDispatchToProps phải đc truyền sau mapStateToProps theo định nghĩa
const ComponentGioHangRedux = connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)
export default ComponentGioHangRedux;