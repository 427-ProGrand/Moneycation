import '../../App.css';
import TopMenu from '../components/TopMenu'
import React from 'react';
import {Link} from 'react-router-dom';

function PlannerPage() {
  return (
  <div className='App'>
    <TopMenu />
    <a>Planner page</a>
    <Link className={"TopMenu-button"} to="/budgetForm">VIEW OLD SHEETS</Link>
    <Link className={"TopMenu-button"} to="/budgetForm">CREATE NEW SHEET</Link>

  </div>
  );
}

export default PlannerPage;