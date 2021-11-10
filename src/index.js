import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,BrowserRouter } from 'react-router-dom'  
import Home from './Home';

const routing = (  
  <BrowserRouter>  
      <Routes>
    
        <Route path="/" element={<App />} ></Route> 
        <Route path="home" element={<Home />} ></Route> 

      </Routes>
      
    
  </BrowserRouter>  
)  
ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();