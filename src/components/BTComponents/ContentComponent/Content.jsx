import React, { Component,Fragment } from 'react';
import CardRCC from '../../CardRCC/CardRCC';

class Content extends Component {
    render() {
        return (
                <div className='col-8 text-center bg-warning text-white'>
                    <h1>Content</h1>
                    <div className='row'>
                      <CardRCC/>
                      <CardRCC/>
                      <CardRCC/>
                      <CardRCC/>
                    </div>
                </div>
        );
    }
}

export default Content;