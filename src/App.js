import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
