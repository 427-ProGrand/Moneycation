import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class TopMenu extends React.Component {
  render() {
    return (
      <div className="TopMenu">
        <div className="parent-grid-container">
          <div className="TopMenu-buttongroup">
            <div className="leftalign">
              <Link to="/" className="TopMenu-title-text">Moneycation</Link>
            </div>
          </div>
          <nav className="rightalign">
            <Link className="TopMenu-button" to="/budgetForm">Planner</Link>
            <Link className="TopMenu-button" to="/settings">Settings</Link>
            <Link className="TopMenu-button" to="/login">Login/Signup</Link>
            {(localStorage.getItem('isAuthenticated', 'true')) ? (
              [<Link className="TopMenu-button" to="/logout">Logout</Link>]
            ) : ''}
          </nav>
        </div>
      </div>
    );
  }
}

export default TopMenu;
