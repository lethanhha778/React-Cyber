import React, { Component } from 'react'
import { connect } from 'react-redux'

//c1: luu giá trị từ form ở state của component
//c2: lưu giá trị từ form ở redux
class FormDK extends Component {
    // chứa giá trị từ form, chứa nội dung error
    state = {
        values: {
            taiKhoan: '', hoTen: '',
            matKhau: '', sdt: '',
            email: '', maLoaiND: 'khachHang'
        },
        errors: {
            taiKhoan: '', hoTen: '',
            matKhau: '', sdt: '',
            email: '', maLoaiND: ' '
        }
    }
    // valueForm= {
    //     // tenThuocTinh: giáTri

    // };
    inputChange = (e) => {
        // console.log(e.target.value, e.target.name);
        // let value = e.target.value;
        // let name = e.target.name;
        let { value, name } = e.target
        // object literal
        // tổ chức lưu dữ liệu với state
        let newValues = { ...this.state.values, [name]: value }
        console.log(newValues)
        let newErrors = { ...this.state.errors }
        let errorMsg = ''
        if (value.trim() === '') {
            errorMsg = name + ' Ko Để Trống!'
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
        this.setState({
            values: newValues,
            errors: newErrors
        })
    }
    handlerSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        // kiểm tra các dữ liệu đã hợp lệ chưa
        for (const key in this.state.errors) {
            if (this.state.errors[key] !== "") {
                // còn lỗi
                isValid = false;
                // có lỗi dừng duyệt đối tượng
                break;
            }
        }

        // kiểm tra dữ liệu rỗng khi ko change value
        for (const key in this.state.values) {
            if (this.state.values[key] === " ") {
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
            nguoiDung: this.state.values
        }
        this.props.dispatch(action)

    }
    static getDerivedStateFromProps(newProps, currentState) {
        // trường hợp chỉnh sửa gõ trên form thì cần đổi state của cpn => lấy this.state
        // trường hợp xem thông tin thì lên redux lấy nguoiDungChitet về lưu vào props
        //=> đem từ props lưu vào state
        console.log('newProps', newProps);
        // newProps lấy từ mapStateToProps
        console.log('currentState', currentState)

        if (newProps.nguoiDungChiTiet.taiKhoan !== currentState.values.taiKhoan) {
            console.log(1)
            //? cần xem thông tin chi tiết
            // return state mới
            return {
                ...currentState,
                values: newProps.nguoiDungChiTiet // lấy nguoiDungChiTiet lưu vào state
            }
        }
        //? ngược lại, cập nhật người dùng
        return currentState // lấy dữ liệu từ form sự kiện onchange lưu vào state
    }

    // componentWillReceiveProps(newProps){
    //     // chỉ chạy khi props thay đổi => xem chi tiết
    //     this.setState({
    //         values: newProps.nguoiDungChiTiet
    //     })
    // }

    render() {
        console.log(this.props);
        // let {taiKhoan,hoTen} = this.props.nguoiDungChiTiet
        let { taiKhoan, hoTen, matKhau, sdt, email, maLoaiND } = this.state.values

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
                            <p className='text-danger'>{this.state.errors.taiKhoan}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Họ Tên</label>
                            <input value={hoTen}
                                type="text" name='hoTen'
                                className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.state.errors.hoTen}</p>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Mật Khẩu</label>
                            <input type="password"
                                value={matKhau}
                                name='matKhau' className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.state.errors.matKhau}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Số Điện Thoại</label>
                            <input type="text"
                                value={sdt}

                                name='sdt' className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.state.errors.sdt}</p>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName">Email</label>
                            <input type="text" typeinput="email"
                                value={email}

                                name='email' className="form-control"
                                onChange={(e) => { this.inputChange(e) }}
                            />
                            <p className='text-danger'>{this.state.errors.email}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Mã Loại Người Dùng</label>
                            <select
                                value={maLoaiND}
                                name='maLoaiND' className="form-control"
                                onChange={(e) => { this.inputChange(e) }} >
                                <option value=''>Chọn User</option>
                                <option value='khachHang'>Khách Hàng</option>
                                <option value='quanTri'>Quản Trị</option>
                            </select>
                        </div>
                    </div>
                    <div className='text-right py-2'>
                        <button className="btn btn-dark mr-2" type='button'> Cập Nhật</button>
                        <button onClick={() => {

                        }}
                            className="btn btn-secondary">Đăng Ký</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        nguoiDungChiTiet: rootReducer.QLNDReducer.nguoiDungChiTiet
    }
}

export default connect(mapStateToProps)(FormDK)
