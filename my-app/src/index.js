import React from 'react';
import ReactDOM, {Link} from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './ui/screens/LoginPage';
import SettingsPage from './ui/screens/SettingsPage';
import PlannerPage from './ui/screens/PlannerPage';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="settings" element={<SettingsPage/>}/>
      <Route path="planner" element={<PlannerPage/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
