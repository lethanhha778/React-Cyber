import React, { Component } from 'react'
import { connect } from 'react-redux'

//c2: lưu giá trị từ form ở redux
class FormDK extends Component {

    inputChange = (e) => {
        let { value, name } = e.target
        let newValues = { ...this.props.nguoiDung.values, [name]: value }
        console.log(newValues)
        let newErrors = { ...this.props.nguoiDung.errors }
        let errorMsg = ''
        if (value.trim() === '') {
            errorMsg = name + ' Ko Để Trống!'
            console.log(1);
        }

        //kt email
        // lấy giá trị của type Input
        let typeValue = e.target.getAttribute('typeinput');
        if (typeValue === 'email') {
            let regexr = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            //?C1:
            if (!regexr.test(value)) { //! test value theo biểu thức regexr 
                errorMsg = 'Email sai định dạng!'
            }
            //?C2
            // if(!value.match(regexr)){  
            //     errorMsg = 'Email sai định dạng!' 
            // }
        }
        newErrors[name] = errorMsg
        // đẩy giá trị từ form, thông báo lỗi lên redux
        let action = {
            type: 'HANDLE_CHANGE',
            nguoiDung: {
                values: newValues,
                errors: newErrors
            }
        }
        this.props.dispatch(action)

    }
    handlerSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        // preventDefault ngăn chặn rs form khi dữ liệu chưa nhập xong mà submit
        let isValid = true;
        // kiểm tra các dữ liệu đã hợp lệ chưa       
        for (const key in this.props.nguoiDung.errors) {
            if (this.props.nguoiDung.errors[key] !== "") {
                // nếu còn lỗi => isValid
                isValid = false;
                // có lỗi dừng duyệt đối tượng
                break;
            }
        }

        // kiểm tra dữ liệu rỗng khi ko change value
        for (const key in this.props.nguoiDung.values) {
            if (this.props.nguoiDung.values[key] === "") {
                // còn lỗi
                isValid = false;
                // có lỗi dừng duyệt đối tượng 
                break;
            }
        }
        // đẩy dữ liệu lên redux

        if (!isValid) {
            //k hợp lệ
            alert("Dữ liệu ko hợp lệ")
            return;
        }
        // đẩy dữ liệu lên redux
        let action = {
            type: "THEM_ND",
            nguoiDungg: this.props.nguoiDung.values
        }
        this.props.dispatch(action)

    }
    render() {
        console.log(this.props)
        let { taiKhoan, hoTen, matKhau, sdt, email, maLoaiND } = this.props.nguoiDung.values;

        return (
            <div className='container py-5'>
                <h2 className='text-light bg-dark text-center'>Form Đăng Ký</h2>
                <form onSubmit={(e) => {
                    this.handlerSubmit(e)
                }}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Tài Khoản</label>
                            <input value={taiKhoan}
                                type="text" name='taiKhoan'
                                className="form-control"
                                onChange={(e) => {
                                    this.inputChange(e)
                                }}
                            />
                            <p className='text-danger'>{this.props.nguoiDung.errors.taiKhoan}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Họ Tên</label>
                            <input value={hoTen}
                                type="text" name='hoTen'
                                className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.props.nguoiDung.errors.hoTen}</p>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Mật Khẩu</label>
                            <input value={matKhau}
                                type="password"
                                name='matKhau' className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.props.nguoiDung.errors.matKhau}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Số Điện Thoại</label>
                            <input value={sdt}
                                type="text"
                                name='sdt' className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.props.nguoiDung.errors.sdt}</p>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Email</label>
                            <input value={email}
                                type="text" typeinput="email"
                                name='email' className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.props.nguoiDung.errors.email}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Mã Loại Người Dùng</label>
                            <select value={maLoaiND}
                                name='maLoaiND' className="form-control"
                                onChange={(e) => { this.inputChange(e) }} >
                                <option value='khachHang'>Khách Hàng</option>
                                <option value='quanTri'>Quản Trị</option>
                            </select>
                        </div>
                    </div>
                    <div className='text-right py-2'>

                        <button onClick={() => {
                            const action = {
                                type: 'CAP_NHAT_ND',
                                nguoiDungCapNhat: this.props.nguoiDung.values
                            }
                            this.props.dispatch(action)
                        }}
                            // thêm type là button để ko gọi onsubmit
                            type='button'
                            className="btn btn-dark mr-2">Cập Nhật
                        </button>
                        <button
                            className="btn btn-secondary">Đăng Ký
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        nguoiDung: rootReducer.QLNDReducer.nguoiDung
    }
}

export default connect(mapStateToProps)(FormDK)
