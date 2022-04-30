/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu';

function SettingsPage() {
  return (
  <div className='App'>
    <TopMenu />

    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <div className="settings-sub">
        <div className={"parent", "grid-container"}>
           <div className={"grid-item", "leftalign"}>
             <h2 className="settings-headings">Change Password</h2>
           </div>
           <div className={"grid-item", "rightalign"}>
             <div>
             <p>
               <label>Current Password</label>
               <input/>
             </p>
             <p>
               <label>New Password</label>
               <input/>
             </p>
             <p>
               <label>Confirm New Password</label>
               <input/>
             </p>
             </div>
           <h3 className={"settings-select-button"}>CHANGE</h3>
           </div>
        </div>
      </div>

      <div className="settings-delete-div"><a className="settings-delete-button">Delete Account</a></div>

    </div>
  </div>

  );
}

export default SettingsPage;
