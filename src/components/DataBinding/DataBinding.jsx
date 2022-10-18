import React, { Component } from 'react'

export default class DataBinding extends Component {
    // thuộc tính của lớp đối tượng
    foodInfo = {
        name: "Pizza",
        price: 1222,
        avt: "https://source.unsplash.com/random/?mooncake",
    }
    renderImg = () => {
        return <div className='card'>
            <img className="card-img-top" src={this.foodInfo.avt} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.foodInfo.name}</h5>
                <p className="card-text">{this.foodInfo.price}$</p>
            </div>
        </div>
        // cách 2
        // return(
        //     <div className='card'>
        //     <img className="card-img-top" src={this.foodInfo.avt} alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{this.foodInfo.name}</h5>
        //         <p className="card-text">{this.foodInfo.price}$</p>
        //     </div>
        // </div>
        // )
    }

    render() {
        // biến trong hàm
        let userName = "admin";
        return (
            <div className='container'>
                {/*  {}: binding data */}
                <h1>Hello {userName}</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="card">                
                            <img className="card-img-top" src={this.foodInfo.avt} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.foodInfo.name}</h5>
                                <p className="card-text">{this.foodInfo.price}$</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        {/* binding hàm có return UI, giá trị tính toán */}
                        {this.renderImg()}
                    </div>
                </div>

            </div>

        )
    }
}
