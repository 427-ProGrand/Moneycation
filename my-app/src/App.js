/* eslint-disable */
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import TopMenu from './ui/components/TopMenu';
import {Image} from 'semantic-ui-react';
import PlanPic from './ui/components/PlannerPicture.png';

function App() {
  return (
  <div className='App'>
    <TopMenu />
    <div className={"mainpage-container"}>
      <h1>Plan out your budget!</h1>
      <Image src={PlanPic} style={{maxWidth: "90vw"}}/>
      <h3>
        Sign in
        <Link className="mainpage-textline" to="/login">
          here
        </Link>
        to get started
      </h3>
    </div>
  </div>
  );}

export default App;
