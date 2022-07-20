import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

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
      </BrowserRouter>
    </div>
  );
}

export default App;
