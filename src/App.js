import React,{useEffect,useState} from 'react'
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Technology from './Component/Technology';
import Crew from './Component/Crew';

import Home from './Component/Home';
import Destination from './Component/Destination';
function App() {
  const[king,setKing]=useState()
  useEffect(()=>{
    fetch('data.json')
    .then(res=>(res.json()))
    .then(data=>setKing(data))
  })
  return (
    <BrowserRouter>
      <div className="App">
        { king &&
        <>        
          <Routes>
            <Route exact path='/' element={<Home/>}>
            </Route>
            <Route path='/destination' element={<Destination data={king}/>}>
            </Route>
            <Route path='/technology' element={<Technology data={king} />}>
            </Route>
            <Route path='/crew'  element={<Crew data={king}/>}></Route>
          </Routes> 
        </>}
          
      </div>
    </BrowserRouter>
  );
}

export default App;
