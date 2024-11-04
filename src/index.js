import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/profile';
import HomePage from './pages/home';
import AddressPage from './pages/addresses/AddressPage';
import Page4 from './pages/page4';
import Page5 from './pages/page5/page5';
import Page6 from './pages/page6/page6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/address' element={<AddressPage />} />
    <Route path='/page4' element={<Page4 />} />
    <Route path='/page5' element={<Page5 />} />
    <Route path='/page6' element={<Page6 />} />

   

   </Routes>
   
   
   </BrowserRouter>


    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
