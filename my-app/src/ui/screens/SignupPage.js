/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu';

function SignupPage() {
  return (
  <div className='App'>
    <TopMenu />

    <div className="signUp-container">
      <h1 className="signUp-title">Sign Up</h1>
      <div className="signUp-email">
        <p>
          <h3>Sign Up</h3>
        </p>
        <p>
          <input placeholder="Email..."/>
        </p>
      </div>
      <div className="signUp-username">
        <p>
          <h3>Username</h3>
        </p>
        <p>
          <input placeholder="Username..."/>
        </p>
      </div>
      <div className="signUp-password">
        <p>
          <h3>Password</h3>
        </p>
        <p>
          <input placeholder="Password..."/>
        </p>
      </div>
      <div className="signUp-button" >Sign Up!</div>
    </div>
  </div>
  );
}

export default SignupPage;
