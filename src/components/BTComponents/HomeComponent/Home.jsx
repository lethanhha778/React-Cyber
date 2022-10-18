import React, { Component } from 'react';

import Content from '../ContentComponent/Content';
import Footer from '../FooterComponent/Footer';
import Header from '../HeaderComponet/Header';
import Nav from '../NavComponent/Nav';

class Home extends Component {
    render() {
        return (
            <div className='home'> 
                <Header/>
                <div className='container-fluid cen' >
                    <div className='row '>
                            <Nav/>
                            <Content/>            
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;