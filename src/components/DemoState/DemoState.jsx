import React, { Component } from 'react'

export default class DemoState extends Component {
    //tạo 1 biến chứa trạng thái đăng nhập
    //tạo hàm kiểm tra khi click btn Login => đổi giá trị isLogin => true
    //kiểm tra nếu true => đã đăng nhập => header sẽ hiển thị tên user name
    // Ngược lại  => btn login
    // ngoài render là phương thức và thuộc tính
    // trong render là khai báo biến
        //? isLogin = false;  // false chưa đăng nhập
    // phương thức kiểm tra đăng nhập
    // chuyển giá trị dòng 10 cần đổi vào state ( thuộc tính có sẵn của react)
    // state là kiểu đối tượng {}
       state ={
            isLogin: false
       }
    checkLog = ()=>{
        if(this.state.isLogin){
            return <p className='text-white'>Admin</p>
        }
        return <button onClick={() => { 
            // cick đổi isLogin = true => Ui sẽ load lại và hiển thị tên client
            // this.isLogin =true;
            // console.log(this.isLogin);
            // load lại UI
            // this.render() // !hàm render chỉ chạy 1 lần khi load ứng dụng
            // để đổi đc giá trị và render lại UI khi giá trị thay đổi => state
            // sét giá trị mới cho isLogin và render lại UI
            // setState có 2 tham số truyền vào (giá trị mới, hàm callback)
            this.setState({
                isLogin: true
                // nếu đặt clg  bên ngoài thì sẽ bị bất đồng bộ nên phải đặt ở tham số thứ 2, để xử lý nghiệp vụ sau khi state thay đổi
            }, () => { console.log(this.state.isLogin);
            })

         }} className='btn btn-success'>Login</button>
    }
   
    render() {
        return ( 
            // <div>
            //         {this.state.isLogin ? <p className='text-dark'>Admin</p> : <button onClick={this.checkLog}>Login</button>  }
            // </div>
            <div className='container'>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#!">Navbar</a>
                    <div>
                        {/* hiển thị btn login hoặc tên user name */}
                        {this.checkLog()}                      
                    </div>
                </nav>
            </div>

        )
    }
}
