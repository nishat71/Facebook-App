import logo from './logo.svg';
import './App.css';
import Home from './Layouts/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Pages/Error';
import Login from './features/Login/Login';
import NavBar from './Layouts/Navbar';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;