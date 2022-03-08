import '../../App.css';
import TopMenu from '../components/TopMenu'
import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
  <div className='errorpage'>
    <div className={"errorpage-container"}>
    <h2>ERROR! Page does not exist :(</h2>
    <h1 className="errorpage_404text">404</h1>
    <h4>Click <Link className="mainpage-textline" to="/">here</Link> to go to safety</h4>
    </div>
  </div>
  );
}

export default ErrorPage;