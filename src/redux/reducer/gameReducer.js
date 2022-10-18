//rxr
// giá trị mặc định của state
// game: mangXucXac, banChon, tongBan, soBanThang

const initialState = {
    mangXucXac: [
        { hinh: "./Img/xucxac/1.png", diem: 1 },
        { hinh: "./Img/xucxac/2.png", diem: 2 },
        { hinh: "./Img/xucxac/3.png", diem: 3 },
    ],
    banChon: true,
    tongBan: 0,
    soBanThang: 0
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            // console.log(action);
            state.banChon = action.datCuoc
            return { ...state }
        case 'LAC':
            // Math.floor(Math.random() * 6) + 1 ;
            let mangNgauNhien = []; // đối tượng xúc xắc
            for (let i = 0; i < 3; i++) {
                let matXucXac = Math.floor(Math.random() * 6) + 1;
                let xucXac = {
                    hinh: `./Img/xucxac/${matXucXac}.png`,
                    diem: matXucXac 
                }
                mangNgauNhien.push(xucXac)
            }  
            console.log(mangNgauNhien)
            state.mangXucXac =mangNgauNhien

            let totalXucXac = state.mangXucXac.reduce((total,xucxac) => {
                return total += xucxac.diem
            },0)
            console.log(totalXucXac);
            if((state.banChon && totalXucXac>=11)||(!state.banChon&& totalXucXac < 11)){
                state.soBanThang +=1
            }
            state.tongBan +=1
            if(state.tongBan>=20){
                alert('Thôi Đừng Gỡ Nữa')
            }

            return {...state}
        default:
            return state
    }
}
