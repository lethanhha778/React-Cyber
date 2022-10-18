import React, { Component } from 'react'
// import "./demoSty.css";
import  './demoSty.css'
import styleModule from './StyleComponent.module.css'

export default class DemoStyling extends Component {
   
  render() {
    let styleOBj ={
        color: 'red',
        backgroundColor: 'blue',
    }
    return (
      <div>
        <p className='demoCss'>DemoStyling</p>
        <p style={styleOBj}>DemoStyling</p>
        {/* {{}} ngoặc đầu tiên là databiding , ngoặc thứ 2 là đối tượng*/}
        <p style={{color:"yellow", backgroundColor: 'black'}}>DemoStyling</p>
        <p className={styleModule.text}>DemoStyling</p>
        <p className={`${styleModule.text} ${styleModule["center-text"]}`}>DemoStyling</p>
      </div>
    )
  }
}
