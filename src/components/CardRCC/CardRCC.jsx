import React, { Component } from 'react'

export default class CardRCC extends Component {
  render() {
    return (
      <div className='col-3'>
        <div className="card text-dark">
          <img className="card-img-top" src="https://i.pravatar.cc/?u=70" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    )
  }
}
