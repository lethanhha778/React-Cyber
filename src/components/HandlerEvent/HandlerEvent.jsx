import React, { Component } from 'react'

export default class HandlerEvent extends Component {
    clickBtn = () => {
        alert("click rồi ")
    }
    clickBtn2 = (name) =>{
        // truyển biến vào chuỗi string
        alert(`Hello ${name}`)
    }
    render() {
        return (
            <div className='container py-5'>
                {/* chờ click thì ko có dấu () */}
                {/* {}: truyền dữ liệu vào thẻ JSX */}
                <button className='btn btn-danger mr-4' onClick={this.clickBtn}>Click</button>
                {/* C2 Hàm ẩn danh */}
                <button className='btn btn-warning' onClick={() => { 
                    this.clickBtn2("Admin");
                    console.log(2222);
                 }}>Click</button>



                {/* <button className='btn btn-warning' onClick={this.clickBtn2.bind(this,"admin")}>Click Có Tham Số</button> */}
                
            </div>
        )
    }
}

// c1 dùng bind()
// bind() ràng buộc this
// c2 dùng anomyus (hàm ẩn danh)