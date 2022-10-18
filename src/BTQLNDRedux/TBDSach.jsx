import React, { Component } from 'react'
import { connect } from 'react-redux'
class TBDSach extends Component {
    renderTable = () => {
        let stt = 1
        return this.props.nguoiDung.map((nd) => {
            return <tr key={nd.taiKhoan}>
                <td>{stt++}</td>
                <td>{nd.taiKhoan}</td>
                <td>{nd.hoTen}</td>
                <td>{nd.matKhau}</td>
                <td>{nd.sdt}</td>
                <td>{nd.email}</td>
                <td>{nd.maLoaiND}</td>
                <td>
                    <button onClick={() => { 
                        let action = {
                            type: "XEM_ND",
                            xemND: nd
                        }
                        this.props.dispatch(action)
                     }}
                        className='btn btn-secondary'>Xem</button>
                    <button onClick={() => {
                        let action = {
                            type: "XOA_ND",
                            tkXoa: nd.taiKhoan
                        }
                        this.props.dispatch(action)
                    }}
                        className="btn btn-dark ml-1">Xóa</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className='container'>
                <h2 className='text-light bg-dark text-center'>Danh Sách Người Dùng</h2>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tài Khoản</th>
                            <th scope="col">Họ Tên</th>
                            <th scope="col">Mật Khẩu</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số Điện Thoại</th>
                            <th scope="col">Loại Người Dùng</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        nguoiDung: rootReducer.QLNDReducer.mangND,
    }
}

export default connect(mapStateToProps)(TBDSach)
