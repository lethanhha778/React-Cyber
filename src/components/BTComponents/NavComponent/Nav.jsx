import React, { Component } from 'react';
import CardRCC from '../../CardRCC/CardRCC';

class Nav extends Component {
    render() {
        return (
            <div className='navcc bg-success text-white col-4'>
                <h1 className='text-center'>Navigation</h1>
                <ul>
                    <li>Item1</li>
                    <li>Item1</li>           
                </ul>
            </div>
        );
    }
}

export default Nav;