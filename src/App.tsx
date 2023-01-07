import './index.css'
import SideBar from './components/Sidebar/SideBar';
import MainDash from './components/MainDash/MainDash';
import RightSlide from './components/RightSlide/RightSlide';
function App() {
  return (
    <div className="App">
      <div className='AppGlasws'>
        <SideBar />
        <MainDash/>
        <RightSlide/>
      </div>
    </div>
  );
}

export default App;
