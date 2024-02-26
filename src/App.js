import logo from './logo.svg';
import './App.css';

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
