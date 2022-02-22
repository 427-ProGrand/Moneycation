import React from 'react';

class TopMenu extends React.Component {
  render() {
    return (
      <div className="TopMenu">
        <div className={"parent", "grid-container"}>
          <div className={"TopMenu-buttongroup", "grid-item", "leftalign"}>
            <h className={"TopMenu-title-text"}>Moneycation</h>
          </div>
          <div className={"TopMenu-buttongroup", "grid-item", "rightalign"}>
            <a className={"TopMenu-button"} href="/planner">Planner</a>
            <a className={"TopMenu-button"}  href="/settings">Settings</a>
            <a className={"TopMenu-button"} href="/login">Login/Signup</a>
          </div>
        </div>
      </div>
    )
  }
}

export default TopMenu;