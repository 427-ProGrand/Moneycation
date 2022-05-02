/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
import '../../App.css';
import React, { useRef } from 'react';
import { Form, Header, Button, Modal, Grid } from 'semantic-ui-react';
import TopMenu from '../components/TopMenu';
import { useAccounts } from '../../contexts/AccountsContext';

function SettingsPage() {
  const [open, setOpen] = React.useState(false);
  const [errTxt, setErrTxt] = React.useState(false);
  const cPasswordRef = useRef();
  const nPasswordRef = useRef();
  const nCPasswordRef = useRef();
  const { editPassword, deleteAccount } = useAccounts();

  function setTxt(bool) {
    if (bool === false) {
      setErrTxt('Error! Either current or new password is invalid!');
    } else {
      setErrTxt('Password successfully changed!');
      window.location = '/settings';
    }
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    setTxt(editPassword({
      currentPassword: cPasswordRef.current.value,
      newPassword: nPasswordRef.current.value,
      newPasswordC: nCPasswordRef.current.value,
    }));
  }

  function handleDeleteAcc(e) {
    e.preventDefault();
    deleteAccount();
  }

  return (
    <div className="App">
      <TopMenu/>

      <div className="settings-container">
        <h1 className="settings-title">Settings</h1>
        <div className="settings-sub">
          <div className="parent-grid-container">
            <div className="leftalign">
              <h2 className="settings-headings">Change Password</h2>
            </div>
            <div className="rightalign">
              <div>
                <Form onSubmit={handlePasswordSubmit}>
                  <div className="signUp-username">
                    <Form.Field required>
                      <label><h3>Current Password</h3></label>
                      <input ref={cPasswordRef} placeholder="Current Password..."/>
                    </Form.Field>
                  </div>
                  <div className="signUp-password">
                    <Form.Field required>
                      <label><h3>New Password (must be at least 8 characters)</h3></label>
                      <input ref={nPasswordRef} placeholder="New Password..."/>
                    </Form.Field>
                  </div>
                  <div className="signUp-password">
                    <Form.Field required>
                      <label><h3>Confirm Password</h3></label>
                      <input ref={nCPasswordRef} placeholder="Confirm Password..."/>
                    </Form.Field>
                  </div>
                  <div>
                    <Button className="settings-select-button" content="CHANGE"/>
                  </div>
                </Form>
                <div>
                  <Header color="red" content={errTxt}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-delete-div">
          <Modal
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button className="settings-delete-button">Delete Account</Button>}
          >
            <Modal.Content>
              <Header>Are you sure?</Header>
            </Modal.Content>
            <Modal.Actions>
              <Grid relaxed padded>
                <Form onSubmit={handleDeleteAcc}>
                  <Button color="red" content="Yes"/>
                </Form>
                <Button onClick={() => setOpen(false)}>No</Button>
              </Grid>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    </div>

  );
}

export default SettingsPage;
