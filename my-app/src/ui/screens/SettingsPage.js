import '../../App.css';
import TopMenu from '../components/TopMenu';

//var str = "settings-password-hidden";
var str = { style: "settings-password-visible"};

function SettingsPage() {
  return (
  <div className='App'>
    <TopMenu />

    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <div className="settings-sub">
        <div className={"parent", "grid-container"}>
           <div className={"grid-item", "leftalign"}>
             <h2 className="settings-headings">Import Data</h2>
           </div>
           <div className={"grid-item", "rightalign"}>
             <h3 className={"settings-select-button"}>IMPORT</h3>
           </div>
        </div>
      </div>
      <div className="settings-sub">
        <div className={"parent", "grid-container"}>
           <div className={"grid-item", "leftalign"}>
             <h2 className="settings-headings">Export Data</h2>
           </div>
           <div className={"grid-item", "rightalign"}>
             <h3 className={"settings-select-button"}>EXPORT</h3>
           </div>
        </div>
      </div>
      <div className="settings-sub">
        <div className={"parent", "grid-container"}>
           <div className={"grid-item", "leftalign"}>
             <h2 className="settings-headings">Change Password</h2>
           </div>
           <div className={"grid-item", "rightalign"}>
             <h3 className={"settings-select-button"} onClick={ExpandPwd}>CHANGE</h3>
             <div className={str.style}>
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
           </div>
        </div>
      </div>
      <div className="settings-delete-div"><a className="settings-delete-button">Delete Account</a></div>

    </div>
  </div>
  );
}

function ExpandPwd() {
  str.style = "settings-password-visible";
}

export default SettingsPage;