import React, { Component } from 'react'

import { connect } from 'react-redux';

class SPRedux extends Component {
    render() {
        console.log(this.props)
        let { phone } = this.props
        return (
            <div className="card">
                <img className="card-img-top" src={phone.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{phone.tenSP}</h4>
                    <p className="card-text">{phone.giaBan.toLocaleString()} vnđ</p>
                    <button onClick={() => {
                        const action ={
                            type:'THEM_GIO_HANG',
                            sanPham: phone
                        }
                        this.props.dispatch(action)}} 
                        data-toggle="modal" data-target="#modelId" className="btn btn-danger">Thêm Giỏ Hàng</button>
                </div>
            </div>
        )
    }
}

// mapStateToProps : chỉ tạo khi cần lấy giữ liệu từ Store xún component
// nếu ko cần lấy dữ liệu thì ko tạo

// Đẩy dữ liệu lên store
//C1: sử dụng hàm dispatch(): giúp gửi dữ liệu từ cpn lên trên store
// để đẩy data lên store thì phải tạo action object


//  có thể export trực tiếp component mới của connect tạo ra
export default connect()(SPRedux);