/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu';

function LoginPage() {
  return (
  <div className='App'>
    <TopMenu />

    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="login-username">
        <p>
          <h3>Username</h3>
        </p>
        <p>
          <input placeholder="Username..."/>
        </p>
      </div>
      <div className="login-password">
        <p>
          <h3>Password</h3>
        </p>
        <p>
          <input placeholder="Password..."/>
        </p>
      </div>
      <div className="login-button" >Login</div>
      <div className="login-new-account">Need an account? <a href="">Click here</a></div>
    </div>
  </div>
  );
}

export default LoginPage;
