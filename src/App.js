import React from 'react';
import './App.module.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/Home" element={<Home/>}>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
