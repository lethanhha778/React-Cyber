// chứa các giá trị cần đổi state

import {combineReducers, createStore} from 'redux';
import { gioHangReducer } from './reducer/gioHangReducer';
import { gameReducer } from './reducer/gameReducer';
import { QLNDReducer } from './reducer/quanLyNDReducer';
// reducer là state lưu trên store redux
// rootReducer: chứa tất cả các state
// khái báo giá trị mặc định cho state


const rootReducer = combineReducers({
    // khai báo và lưu trữ các state của ứng dụng
    // default parameter
    //reducer sẽ nhận tất cả data đẩy lên store => để phân loại nghiệp vụ cần xử lý => kiểm tra type của action


    // gioHangReducer: gioHangReducer
    // rút gọn tên với thuộc tính (obj literal)
    gioHangReducer,
    gameReducer,
    QLNDReducer
    // Game
})

 export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());