import { Route, Routes } from 'react-router-dom';
import './Assets/CSS/App.css';
import Sign from './component/Sign';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Sign/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
