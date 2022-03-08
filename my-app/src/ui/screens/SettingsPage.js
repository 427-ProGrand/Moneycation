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
             <h2 className="settings-headings">Import Data</h2>
           </div>
           <div className={"grid-item", "rightalign"}>
             <input className={"file-upload"} type="file" name="myFile" id="myFile" onChange="updateFileText()"/>
             <label htmlFor={"myFile"}>
               <h3 className={"settings-select-button"}>IMPORT</h3>
             </label>
             <span className="file-upload_text" id="file-upload_text">No file selected</span>
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

function updateFileText() {
  const text = Document.getElementById(".file-upload_text");
  text.content = "whoo!";
  text.title = "whoo!";
}

export default SettingsPage;