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
            <a className={"TopMenu-button"}>Home</a>
            <a className={"TopMenu-button"}>Planner</a>
            <a className={"TopMenu-button"}>Settings</a>
            <a className={"TopMenu-button"}>Login/Signup</a>
          </div>
        </div>
      </div>
    )
  }
}

export default TopMenu;