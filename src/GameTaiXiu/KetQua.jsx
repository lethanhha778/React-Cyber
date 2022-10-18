import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        console.log(this.props);
        let { banChon, tongBan, soBanThang } = this.props.game
        return (
            <div className='result text-center py-5'>
                <p style={{ fontSize: 30, fontWeight: 'bold' }}>
                    Bạn Chọn:
                    <span className='text-danger ml-3'>{banChon ? 'TÀI' : 'XỈU'}</span>
                </p>
                <p style={{ fontSize: 30, fontWeight: 'bold' }}>Số Bàn Thắng:<span className='text-success ml-3'>{soBanThang}</span></p>
                <p style={{ fontSize: 30, fontWeight: 'bold' }}>Tổng Số Bàn Chơi:<span className='text-primary ml-3'>{tongBan}</span></p>
                <button onClick={() => {
                    let action = {
                        type: 'LAC'
                    }
                    this.props.dispatch(action)
                }}
                    className='btn btn-warning'>Play</button>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        game: rootReducer.gameReducer
    }
}



export default connect(mapStateToProps)(KetQua)