import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';
import './index.css';
import App from './App';
import ErrorPage from './ui/screens/ErrorPage';
import LoginPage from './ui/screens/LoginPage';
import SignupPage from './ui/screens/SignupPage';
import SettingsPage from './ui/screens/SettingsPage';
import PlannerPage from './ui/screens/PlannerPage';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.css';
import AddBudget from './ui/screens/AddBudget';
import ViewBudget from './ui/screens/ViewBudget';
import ChooseFormPage from './ui/screens/ChooseForm';
import LogOutPage from './ui/screens/LogOutPage';
import { BudgetsProvider } from './contexts/BudgetsContext';
import { AccountsProvider } from './contexts/AccountsContext';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

ReactDOM.render(
  <AccountsProvider>
    <BudgetsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>}/>
          <Route path="planner" element={<PrivateRoute><PlannerPage /></PrivateRoute>}/>
          <Route path="budgetForm" element={<PrivateRoute><AddBudget /></PrivateRoute>}/>
          <Route path="viewForm" element={<PrivateRoute><ViewBudget /></PrivateRoute>}/>
          <Route path="viewDates" element={<PrivateRoute><ChooseFormPage /></PrivateRoute>}/>
          <Route path="logout" element={<PrivateRoute><LogOutPage /></PrivateRoute>}/>
        </Routes>

      </BrowserRouter>
    </BudgetsProvider>
  </AccountsProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
