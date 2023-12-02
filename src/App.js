import React from 'react';
import './App.module.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import Profile from './pages/Profile';
import Movies from './pages/Movies';




function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Genre" element={<Genre/>}></Route>
      <Route exact path="/Profile" element={<Profile/>}></Route>
      <Route exact path="/Movies" element={<Movies/>}></Route>
    

      
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
