const gioHang =[]
export const gioHangReducer =  (state=gioHang,action) => { 
    switch (action.type) {
        case 'THEM_GIO_HANG':
            // tạo sp giỏ hàng
            // kt có tồn tại
            let spFind = state.find((sp)=>{
                return sp.maSP === action.sanPham.maSP
            });
            if(spFind){
                spFind.soLuong +=1;
            }
            else{
                let spGH = {...action.sanPham, soLuong:1};
                state.push(spGH)
            }

            // return giá trị mới của state
            //? cơ chế redux là nếu state đổi giá trị thì tự động render lại các component có kết nối đến store
            //!redux đang ko nhận biết là state đã đổi giá trị => UI ko render lại
            //!tính bất biến => tham chiếu  => redux kiểm tra địa chỉ ô nhớ của state nếu địa chi ko đổi 
            //!=> giá trị ko đổi => ko render
            //!tính bất biến => tham trị 
            // trả về mảng mới state (dùng cú pháp của ES6)
            // tùy vào kiểu dữ liệu của state nếu mảng thì[...state] obj thì{...state}
            return [...state];
        case 'XOA_SP':   
            let gHCapNhat = state.filter((sp)=>{
                return sp.maSP !== action.maSPXoa
            })
            // filter trả về 1 mảng mới 
            // do gHCapNhat có địa chỉ mới nên khi gắn vào state sẽ có địa chỉ mới => ko cần trả về mảng mới
            state = gHCapNhat
            return state;
        case 'CHANGE_SL':
            let spFindChange = state.find((sp)=>{
                return sp.maSP === action.maSPDoi
            });
            if(spFindChange){
                spFindChange.soLuong += action.soLuong
            }
            return [...state];

        default:
            return state;
    }
 }
