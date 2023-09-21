import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Assets/CSS/App.css';
import Sign from './component/Sign';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Sign/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
