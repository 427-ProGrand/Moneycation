/* eslint-disable */
import '../../App.css';
import TopMenu from '../components/TopMenu'
import React, { useState } from 'react';
import Select from 'react-select'
import {Link} from 'react-router-dom';
import { useBudgets } from '../../contexts/BudgetsContext';
import {Container} from 'semantic-ui-react';


function ChooseFormPage() {
  const { forms } = useBudgets()
  const data = [forms];
  const datesList = data[0];
  //const data = [forms.map(date => {return date.date})];
  //const dates = [];
  //data.forEach(function(e) { dates.push({value:e, label:e})});
  //const dates = data.map(t => ({ value: t, label: t}));
  //const dateList = dates[0];

  console.log(datesList);

  return (
  <div className='App'>
    <TopMenu />
  <div className="budgetform-container">
    <h1 className="budgetform-title">Planner</h1>
    <Select placeholder='Select your Date'
            getOptionValue={option => option.date}
            getOptionLabel={option => option.date}
            options={datesList}
            />
</div>
  </div>
  );
}

export default ChooseFormPage;
