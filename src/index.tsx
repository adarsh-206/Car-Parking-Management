import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Parking from './pages/Parking'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
     <Route path='/' element={<App/>} />
     <Route path='/parking' element={<Parking/>} />  
     <Route path='/' element={<Navigate to="/"/>} />
    </Routes>
  </BrowserRouter>
);


