import React, { Component } from 'react'
import LcChild from './LcChild';

export default class LifeCycleParent extends Component {

    constructor(props) {
        // khởi tạo props, state các thuộc tính của class component
        //props là thuộc tính kế thừa từ cha cần có supper để ko bị ghi đè thuộc tính
        super(props)
        // state là thuộc tính riêng của mỗi cpn
        this.state = {
            number: 0,
            like: 0
        }
        console.log('constructor');
    }

    //static: phương thức tĩnh => gọi phương thức mà ko cần thông qua instance( thể hiện của lớp)
    // ví dụ : SinhVien.TenPhuongThucTinh
    static getDerivedStateFromProps(newProps, currentState) {
        // xử lý trước khi render UI
        console.log("getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');

        // return true thì sẽ render lại giao diện
        // return fales thì sẽ ko render lại giao diện (những cpn chứa thông tin ít thay đổi => ko render lại -footer)
        return true
    }

    render() {
        console.log('render');
        return (
            <div className='container py-5'>LifeCycleParent
                <p>{this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}
                    className='btn btn-danger'>+</button>

                <p>{this.state.like}</p>
                <button onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}
                    className='btn btn-danger'>Like</button>

                {this.state.number > 1 ? '' : <LcChild number={this.state.number} like={this.state.like} />}


            </div>
        )
    }

    componentDidMount() {
        // xử lý các code cần chạy sau khi render đc UI
        // ví dụ dùng các thư viện count up, slick carousel để gắn thư viện sau khi UI load xong
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        // xử lý các code cần chạy sau khi render đc UI
        // ví dụ dùng các thư viện count up, slick carousel để gắn thư viện sau khi UI load xong
        console.log('componentDidUpdate')
    }
     
}
