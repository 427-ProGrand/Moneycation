/* eslint-disable */
import '../../App.css';
import React, { useState, useContext } from "react"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import {Container, Grid, Form, Segment, Header, Table, Button, Divider} from 'semantic-ui-react';
import BudgetForm from '../components/BudgetForm';
import TopMenu from '../components/TopMenu';
import BudgetCard from '../components/BudgetCard';
import BudgetModal from '../components/BudgetModal';
import IncomeModal from '../components/AddIncome';
import { useBudgets, useContexts } from "../../contexts/BudgetsContext";

/**
 * Add Budget Function Component
 * Displays Income, buttons to 'Add Income' 'Add Budget'
 * Displays Budget Cards
 * ***TODO: ATTACH DATA TO USER**
 */
function AddBudget() {
  const { budgets, getBudget, income, calendMoney, calBudgetMoney, addForm, calSpentMoney } = useBudgets();
  const [endMoney, setEndMoney] = React.useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick = () => {
    addForm({
      date: selectedDate,
      income: income[0],
      budgets: budgets,
    })
  }

  function setRColor(money) {
    if(money >-1){
      return "green";
    } else if (money == 0){
      return "black";
    } else {
      return "red";
    }
  }

  function setBColor(money) {
    if(money >-1){
      return "green";
    } else if (money == 0){
      return "black";
    } else {
      return "red";
    }
  }

  function setBTColor(money) {
    if(money < income[0].amount){
      return "green";
    } else if (money == income[0].amount){
      return "black";
    } else {
      return "red";
    }
  }

  return (
    <div className="App">
      <TopMenu/>
      <div className="settings-container">
        <Container fluid className="budget-cards">
          <Segment className="total-income">
            <Header>Total Income: {income[0].amount}</Header>
            <Segment.Inline>
              <IncomeModal/>
              <BudgetModal/>
            </Segment.Inline>
          </Segment>

          <Grid relaxed columns={5}>
          {budgets.map(budget => {
            return (
              <Grid.Column>
              <BudgetCard
                key={budget.id}
                id={budget.id}
                name={budget.name}
                amount={budget.amount}
                max={budget.max}
              />
              </Grid.Column>
            )
          })}
          </Grid>
          <Segment>
            <Header className={setBTColor(calBudgetMoney())}>Total Budget Money: ${calBudgetMoney()}</Header>
            <Header className={setBColor(calSpentMoney())}>Total Budget Money Spent: ${calSpentMoney()}</Header>
            <Header className={setRColor(calendMoney())}>Remaining Money: ${calendMoney()}</Header>
          </Segment>
        </Container>
      </div>
    </div>
  );
}


export default AddBudget;
