import logo from './logo.svg';
import './App.css';
import Home from './Layouts/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Pages/Error';
import Login from './features/Login/Login';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;