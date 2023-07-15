import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import My_profile from './Componets/My_profile';
import Profile from './Componets/Profile';
import Blank from './Componets/Blank';
function App() {
  return (
    
    <div id='container-main'>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/my-profile' element={<Profile/>}/>
    <Route path='/project' element={<Blank/>}/>
    <Route path='/gallery' element={<Blank/>}/>
    <Route path='/to-go' element={<Blank/>}/>
    </Routes>
    

    </div>
  );
}

export default App;
