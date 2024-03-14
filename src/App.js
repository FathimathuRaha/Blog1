import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addblog from './Components/AddBlog';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       
      <Route path='/' element={<Addblog/>}/>
      <Route path='/s' element={<Dashboard/>}/>
      


      </Routes>
    </div>
  );
}

export default App;
