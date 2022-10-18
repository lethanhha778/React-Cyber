const initialState = {
  mangND: [
    { taiKhoan: 'user1', hoTen: 'Nguyễn Văn A', matKhau: 'abc123', sdt: '0901525870', email: 'abc@gmail.com', maLoaiND: 'khachHang' },
    { taiKhoan: 'user2', hoTen: 'Nguyễn Văn B', matKhau: 'abcd123', sdt: '0901525871', email: 'abcd@gmail.com', maLoaiND: 'quanTri' },
  ],
  nguoiDung: {
    values: {
      taiKhoan: '', hoTen: '',
      matKhau: '', sdt: '',
      email: '',
      maLoaiND: 'khachHang'
    },
    errors: {
      taiKhoan: '', hoTen: '',
      matKhau: '', sdt: '',
      email: '',
      maLoaiND: ' '
    }
  }
}

export const QLNDReducer = (state = initialState, action) => {
  // console.log(state.mangND)
  switch (action.type) {
    case 'HANDLE_CHANGE':
      console.log(action.nguoiDung)
      state.nguoiDung = action.nguoiDung
      return { ...state }
    case 'THEM_ND':
      console.log(action.nguoiDungg);
      state.mangND = [...state.mangND, action.nguoiDungg]
      // state = newMangND
      // => lưu mảng mới vào lại biến mảng cũ => đổi địa chỉ ô nhớ
      return { ...state }

    case 'XOA_ND':
      console.log(action.tkXoa)
      // lọc mảng chỉ giữ lại các tài khoản ko xóa
      // filter trả về mảng mới
      state.mangND = state.mangND.filter((tknd) => {
        return tknd.taiKhoan !== action.tkXoa
      })
      return { ...state }

    case 'XEM_ND':
      console.log(action.xemND)
      state.nguoiDung.values = action.xemND
      console.log(state.nguoiDung.values);
      state.nguoiDung = { ...state.nguoiDung } // thay đổi địa chỉ ô nhớ
      return { ...state }
    case 'CAP_NHAT_ND':
      console.log(action.nguoiDungCapNhat);
      // tìm người dùng cần cập nhật trong mảng
      let indexNd = state.mangND.findIndex(nd => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan)
      if(indexNd !== -1){
        state.mangND[indexNd] = action.nguoiDungCapNhat
      }
      console.log( state.mangND)
      state.mangND = [...state.mangND]
      return {...state}
    default:
      return state
  }
}
