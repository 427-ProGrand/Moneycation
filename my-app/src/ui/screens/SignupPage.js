/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu';
import { useRef } from 'react';
import { useAccounts } from '../../contexts/AccountsContext';
import React from 'react';
import { Form } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react/dist/commonjs/modules/Modal';

function SignupPage() {
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const { addAccount } = useAccounts()

   function handleSubmit (e) {
     e.preventDefault();
     addAccount({
       email: emailRef.current.value,
       username: usernameRef.current.value,
       password: passwordRef.current.value,
     })
   };

  return (
    <div className='App'>
      <TopMenu />

      <div className="signUp-container">
        <h1 className="signUp-title">Sign Up</h1>
        <div className="signUp-email">

          <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label><h3>Email</h3></label>
            <input ref={emailRef} placeholder="Email..."/>
          </Form.Field>
          <div className="signUp-username">
            <Form.Field required>
              <label><h3>Username</h3></label>
              <input ref={usernameRef} placeholder="Username..."/>
            </Form.Field>
          </div>
          <div className="signUp-password">
            <Form.Field required>
              <label><h3>Password</h3></label>
              <input ref={passwordRef} placeholder="Password..."/>
            </Form.Field>
          </div>
          <div className="signUp-button" >
            <Form.Button  content='Submit'/>
          </div>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
