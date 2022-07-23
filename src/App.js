import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path='/home' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
