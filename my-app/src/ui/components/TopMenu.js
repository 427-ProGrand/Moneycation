import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import LoginPage from '../screens/LoginPage';
import SettingsPage from '../screens/SettingsPage';
import PlannerPage from '../screens/PlannerPage';

class TopMenu extends React.Component {
  render() {
    return (
      <div className="TopMenu">
        <div className={"parent", "grid-container"}>
          <div className={"TopMenu-buttongroup", "grid-item", "leftalign"}>
            <Link to="/" className={"TopMenu-title-text"}>Moneycation</Link>
          </div>
          <nav className={"TopMenu-buttongroup", "grid-item", "rightalign"}>
            <Link className={"TopMenu-button"} to="/planner">Planner</Link>
            <Link className={"TopMenu-button"}  to="/settings">Settings</Link>
            <Link className={"TopMenu-button"} to="/login">Login/Signup</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default TopMenu;