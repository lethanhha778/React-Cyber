import React, { Component } from 'react'

export default class LcChild extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.checkTime = () => { 

         }
        console.log('Child constructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {

        console.log("Child getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('Child shouldComponentUpdate');
        // return false
        // render lại theo đk
        // newProps giá trị mới của props
        console.log('newProps', newProps);
        // props giá trị hiện tại của props
        console.log('props', this.props);
        if (newProps.like !== this.props.like) {
            // có thay đổi =>render lại UI
            return true
        }
        else {
            // giá trị like ko đổi => ko render lại UI
            // number thay đổi ko render lại giao diện
            return false
        }
    }

    render() {
        console.log('Child render');

        // this.props đc cập nhật giá trị mới
        console.log(this.props)
        return (
            <footer>
                <p>footer</p>
            </footer>
        )
    }
    componentDidMount() {
        this.checkTime= setInterval(() => { 
            console.log("CheckTime sau 2s")
         },2000)
        console.log('Child componentDidMount')
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate')
    }
    componentWillUnmount() {
        // xử lý nghiệp vụ thông báo cho user trước khi chuyển trang hoặc ẩn cpn
        // các API chạy ngầm => thường xuyên cập nhật lấy dữ liệu mới về (5s cập nhật 1 lần)
        // xử lý tắt các API chạy ngầm k cần thiết khi ko còn cần dùng cpn
        console.log('Child componentWillUnmount');
        clearInterval(this.checkTime)
    }

}
