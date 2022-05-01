/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu'
import React from 'react';
import {Link} from 'react-router-dom';

function PlannerPage() {
  return (
  <div className='App'>
    <TopMenu />
    <div className="budgetform-container">
      <h1 className="budgetform-title">Planner</h1>
      <Link className={"TopMenu-button"} to="/budgetForm">CREATE NEW SHEET</Link>
    </div>
  </div>
  );
}

export default PlannerPage;
