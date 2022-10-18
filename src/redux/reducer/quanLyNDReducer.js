const initialState = {
  mangND: [
    { taiKhoan: 'user1', hoTen: 'Nguyễn Văn A', matKhau: 'abc123', sdt: '0901525870', email: 'abc@gmail.com', maLoaiND: 'khachHang' },
    { taiKhoan: 'user2', hoTen: 'Nguyễn Văn B', matKhau: 'abcd123', sdt: '0901525871', email: 'abcd@gmail.com', maLoaiND: 'quanTri' },
  ],
  nguoiDungChiTiet: {
    taiKhoan: '', hoTen: '', matKhau: '', sdt: '', email: '', maLoaiND: ''
    // taiKhoan: '', hoTen: '', matKhau: '', sdt: '', email: '', maLoaiND: ''

  }
}

export const QLNDReducer = (state = initialState, action) => {
  console.log(state.mangND)
  switch (action.type) {
    case 'THEM_ND':
      console.log(action.nguoiDung);
      state.mangND = [...state.mangND, action.nguoiDung]
      document.getElementById('reset').reset()
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
      state.nguoiDungChiTiet = action.xemND
      return { ...state }
    default:
      return state
  }
}
