import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Hero from './component/Hero/Hero';
import Footer from './component/Footer/Footer';
import Addproduct from './component/Product/Addproduct';
import Viewproduct from './component/Product/Viewproduct';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/pro' element={<Addproduct/>}/>
        <Route path='/view' element={<Viewproduct/>}/>
       
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
