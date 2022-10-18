
import './App.css';
import BTQLNguoiDungRedux from './BTQLNDRedux/BTQLNguoiDungRedux';
import BTQLNguoiDung from './BTQuanLyNguoiDung/BTQLNguoiDung';
import BTGioHang from './BTGHRedux/BTGioHang';
import GameTaiXiu from './GameTaiXiu/GameTaiXiu';
import GioHang from './BTGioHang/GioHang';
import BTXCC from './DemoPhone/BTXCC';
import ShoesShop from './DemoProps/ShoesShop/ShoesShop';
import DemoProps from './DemoProps/DemoProps';
import DemoArray from './components/DemoArry/DemoArray';
import DemoStyling from './components/DemoState/DemoStyling';
import Home from './components/BTComponents/HomeComponent/Home';
import DataBinding from './components/DataBinding/DataBinding';
import DemoState from './components/DemoState/DemoState';
import TangFont from './components/DemoState/TangFont';
import ChangeCar from './components/DoiXe/ChangeCar';
import HandlerEvent from './components/HandlerEvent/HandlerEvent';
import CardRCC from './components/CardRCC/CardRCC';
import CardRFC from './components/CardRFC/CardRFC';
import Header from './components/Header/Header';
import LifeCycleParent from './LifeCycle/LifeCycleParent';


// App là component chính của ứng dụng
// chứa các thành phần component con
function App() {
  // return chỉ đc có 1 thẻ bao bên ngoài
  return (
    // thẻ jsx
    <div className="App">
        {/* <p className='demo-css'>Demo</p> */}
       {/* <Home/> */}
       {/* <DataBinding/> */}
       {/* <HandlerEvent/> */}
       {/* <DemoState/> */}
       {/* <TangFont/> */}
       {/* <DemoStyling/> */}
       {/* <ChangeCar/> */}
       {/* <DemoArray/> */}
       {/* <DemoProps/> */}
       {/* <ShoesShop/> */}
       {/* <BTXCC/> */}
       {/* <GioHang/> */}
       {/* <BTGioHang/> */}
       {/* <GameTaiXiu/> */}
       <BTQLNguoiDung/>
      {/* <BTQLNguoiDungRedux/> */}
      {/* <LifeCycleParent/> */}
    </div>
  );
}

export default App;
