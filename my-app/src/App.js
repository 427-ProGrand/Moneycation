import './App.css';
import TopMenu from './ui/components/TopMenu';
import {Link} from 'react-router-dom';

function App() {
  return (
  <div className='App'>
    <TopMenu />
    <div className={"mainpage-container"}>
      <h1>Plan out your budget!</h1>
      <h4>temp img holder</h4>
      <h3>Sign in <Link className="mainpage-textline" to="/login">here</Link> to get started</h3>
    </div>
  </div>
  );
}

export default App;
