import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './ui/screens/ErrorPage';
import LoginPage from './ui/screens/LoginPage';
import SettingsPage from './ui/screens/SettingsPage';
import PlannerPage from './ui/screens/PlannerPage';
import SignupPage from './ui/screens/SignupPage';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.css'
import AddBudget from './ui/screens/AddBudget';
import {BudgetsProvider} from '../src/contexts/BudgetsContext';



ReactDOM.render(
<BudgetsProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signUp" element={<SignupPage/>}/>
      <Route path="settings" element={<SettingsPage/>}/>
      <Route path="planner" element={<PlannerPage/>}/>
      <Route path="budgetForm" element={<AddBudget/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
</BudgetsProvider>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
