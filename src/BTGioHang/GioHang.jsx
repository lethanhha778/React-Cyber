import React, { Component } from 'react'
import DSSPA from './DSSPA'
import Shop from './Shop'

export default class GioHang extends Component {
    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./Img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./Img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": " ./Img/phone/applephone.jpg" }
    ]

    state = {
        gioHang: [
        ]
    }

    addToCart = (spClick) => {
        //8:50
        let gioHangMoi = [...this.state.gioHang]
        // find trả về đối tương, findIndex trả về vị trí phần tử
        let spFind = this.state.gioHang.find((spGH) => {
            return spClick.maSP === spGH.maSP
        })
        if (spFind) {
            spFind.soLuong += 1
        }
        else {
            // giỏ hàng mới chứa các sp của giỏ hàng cũ và sản phẩm đượcspGHMoi
            let spGHMoi = { ...spClick, soLuong: 1 }
            // coppy thuộc tính spClick và thêm thuộc tính soLuong
            // gioHangMoi = [...gioHangMoi, spGHMoi];
            gioHangMoi.push(spGHMoi)
        }
        this.setState({
            gioHang: gioHangMoi

        })
    }
    clearSP = (spXoa)=>{
        let gioHangCapNhat = [...this.state.gioHang]
        
     let viTriSp =  gioHangCapNhat.findIndex(spGH => spGH.maSP === spXoa )
        if(viTriSp > -1){
            gioHangCapNhat.splice(viTriSp,1)

        }
        this.setState({
            gioHang:gioHangCapNhat
        })
     }
    changeSL =(maSp,sl)=>{
        let gioHangCapNhat = [...this.state.gioHang];
        let spFind = this.state.gioHang.find(spGH =>{
            return spGH.maSP === maSp} )
        if(spFind){
            // so luong moi = soluong cu +1 hoặc số lượng cũ + (-1)
            spFind.soLuong = spFind.soLuong +sl
            if(spFind.soLuong === 0){
                alert("Mua Đi Trừ Đủ Rồi")
                spFind.soLuong = spFind.soLuong +1
            }
        }
        this.setState({
            gioHang:gioHangCapNhat
        })
    }
    //input thông tin sp đang đc click
    // output: sản phẩm đc thêm vào mảng giỏ hang
    totalPhone =()=>{
        return this.state.gioHang.reduce((totalProduct,product) =>{
            return totalProduct += product.soLuong;
        },0)
    }

    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="!#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#!">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#!">Disabled</a>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">

                            <p className='text-white'>Giỏ Hàng {this.totalPhone()}</p>
                        </div>
                    </div>
                </nav>
                <DSSPA dataPhone={this.dataPhone} addToCart={this.addToCart}/>
                <Shop gioHang={this.state.gioHang} clearSP={this.clearSP} changeSL={this.changeSL}/>

            </div>
        )
    }
}
