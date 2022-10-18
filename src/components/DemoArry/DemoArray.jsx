import React, { Component } from 'react'

export default class DemoArray extends Component {
    productList = [
        {id:1,name:'black car',price:150,img:"./Img/products/black-car.jpg"},
        {id:2,name:'silver car',price:250,img:"./Img/products/silver-car.jpg"},
        {id:3,name:'steek car',price:350,img:"./Img/products/steel-car.jpg"},
        {id:4,name:'red car',price:450,img:"./Img/products/red-car.jpg"}
    ]
    // renderArray = ()=>{
    //     let content = []
    //     for (let i = 0; i < this.productList.length; i++) {
    //         let{name,price,img} = this.productList[i]
    //         let trObj = <tr key={i}>
    //                         <td>{name}</td>
    //                         <td>{price}</td>
    //                         <td>
    //                             <img style={{width:"100px"}} src={img} alt="" />
    //                         </td>
    //                     </tr>
    //         content.push(trObj)  
    //     }
    //     return content
    // }
    renderCarMap = ()=>{  
        // return dòng 27 trả kết quả hàm renderCarMap  
        return this.productList.map((car,index)=>{
            let{name,price,img} = car;
            // return dòng 31 trả về 1 mảng mới,return chỉ dừng khi hết mảng
            return (
                <tr key={index}>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>
                            <img style={{width:"100px"}} src={img} alt="" />
                        </td>
                </tr>
            )
        })
    }
    render() {
        return (
        <div className='container'>
                <h3 className='text-center'>LIST OF FASHION CAR</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCarMap()}
                    </tbody>
                </table>
        </div>
        )
    }
}
