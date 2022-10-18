import React, { Component } from 'react'
//redux
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {
        let { mangXucXac, banChon } = this.props.game
        console.log(banChon)
        return (
            <div className='row w-50 m-auto py-5'>
                <div className="col-2">
                    <button onClick={() => {
                        let acction = {
                            type: 'DAT_CUOC',
                            datCuoc: true
                        }
                        this.props.dispatch(acction);
                    }}
                        style={{ borderRadius: '50%' }} className='btn btn-primary p-5'>
                        <span style={{ fontSize: 30, fontWeight: 'bold' }}>
                            TÀI</span>
                    </button>
                </div>
                <div className="col-8 text-center mt-4">
                    <img src={mangXucXac[0].hinh} style={{ width: 100 }} alt="" />
                    <img src={mangXucXac[1].hinh} style={{ width: 100 }} alt="" />
                    <img src={mangXucXac[2].hinh} style={{ width: 100 }} alt="" />
                </div>
                <div className="col-2">
                    <button onClick={() => {
                        let acction = {
                            type: 'DAT_CUOC',
                            datCuoc: false
                        }
                        this.props.dispatch(acction);
                    }}
                        style={{ borderRadius: '50%' }} className='btn btn-primary p-5'>
                        <span style={{ fontSize: 30, fontWeight: 'bold' }}>XỈU</span>
                    </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        game: rootReducer.gameReducer

    }
}
export default connect(mapStateToProps)(XucXac)
