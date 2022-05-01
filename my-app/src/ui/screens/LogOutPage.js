/* eslint-disable */
import React from 'react';
import '../../App.css';
import { Button } from 'semantic-ui-react';
import TopMenu from '../components/TopMenu';

function LogOutPage() {
  const handleClick = () => {
    localStorage.setItem('isAuthenticated', '');
    window.location = '/';
  };

  return (
    <div className="App">
      <TopMenu />
      <div className="login-container">
        <Button
          content="Log Out"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default LogOutPage;
