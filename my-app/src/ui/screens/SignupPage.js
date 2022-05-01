/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu';
import { useRef } from 'react';
import { useAccounts } from '../../contexts/AccountsContext';
import React from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router';

function SignupPage() {
  const [errTxt, setErrTxt] = React.useState(false)
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const { addAccount } = useAccounts()

  function setTxt(bool) {
    if(bool == false){
      setErrTxt("Error! An account has already been made or your password is invalid!")
    } else {
      setErrTxt("Successful signup!");
    }
  }

   function handleSubmit (e) {
     e.preventDefault();
     setTxt(addAccount({
       email: emailRef.current.value,
       username: usernameRef.current.value,
       password: passwordRef.current.value,
     }))
     window.location = '/planner';
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
              <label><h3>Password (must be at least 8 characters)</h3></label>
              <input ref={passwordRef} placeholder="Password..."/>
            </Form.Field>
          </div>
          <div  >
            <Button className="signUp-button" content='Submit'/>
          </div>
        </Form>
        </div>

        <div>
          <Header color="red" content={errTxt}/>
        </div>

        <div className="login-new-account">Already have an account? <a className="whitetext" href="/login">Click here</a></div>
      </div>
    </div>
  );
}

export default SignupPage;
