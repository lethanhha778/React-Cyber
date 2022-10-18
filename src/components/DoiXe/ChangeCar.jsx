import React, { Component } from 'react'

export default class ChangeCar extends Component {
  
    state = {
        imgUrl:"./Img/products/black-car.jpg",
    }

    showCar=(color)=>{
        this.setState({
            imgUrl: `./Img/products/${color}-car.jpg`
        })
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center py-2'>Mua Xe</h1>
                <div className="row">
                    <div className="col-8">
                        <img src={this.state.imgUrl} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-4">
                        <ul className="nav flex-column">
                            <li className="nav-item py-2">
                                <button onClick={()=> {this.showCar("black")}}
                                 style={{minWidth:70}} className='btn btn-dark'>Black</button>
                            </li>
                            <li className="nav-item py-2">
                                <button onClick={()=> {this.showCar("steel")}}
                                 style={{minWidth:70}}  className='btn btn-info'>Steel</button>
                            </li>
                            <li className="nav-item py-2">
                                <button onClick={()=> {this.showCar("silver")}}
                                 style={{minWidth:70}}  className='btn btn-light'>Silver</button>
                            </li>
                            <li className="nav-item py-2">
                               <button  onClick={()=> {this.showCar("red")}}
                               style={{minWidth:70}} className='btn btn-danger'>Red</button>
                            </li>
                  
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
