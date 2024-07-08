
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import About from './pages/About';
import Home1 from './pages/Home1';
import Navbar from './component/Navbar';
import Singlerecipe from './pages/Singlerecipe';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/single' element={<Singlerecipe/>}/>
      

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
