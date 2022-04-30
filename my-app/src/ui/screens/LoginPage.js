/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu'
import { Form, Header } from 'semantic-ui-react';
import React, { useRef } from 'react';
import { useAccounts } from '../../contexts/AccountsContext';

function LoginPage() {
  const emailRef = useRef()
  const [errTxt, setErrTxt] = React.useState(false)
  const usernameRef = useRef()
  const passwordRef = useRef()
  const { checkAccount } = useAccounts()


  function setTxt(bool) {
    if(bool == false){
      setErrTxt("Error! Username/Password is incorrect!")
    } else {
      setErrTxt("You've been logged in");
    }
  }

  function handleSubmit (e) {
    e.preventDefault();
    setTxt(checkAccount({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }))
  };

  return (
  <div className='App'>
    <TopMenu />
     <div className="login-container">
    <h1 className="login-title">Login</h1>
    <div className="login-username">

      <Form onSubmit={handleSubmit}>
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

      <div>
        <Header color="red" content={errTxt}/>
      </div>

      <div className="login-new-account">Need an account? <a href="/signup">Click here</a></div>

    </div>
  </div>
  </div>
  );
}

export default LoginPage;
