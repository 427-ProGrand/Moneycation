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
  const { budgets } = useBudgets()
  const { income } = useBudgets()
  const { addForm } = useBudgets()
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick = () => {
    addForm({
      date: selectedDate,
      income: income[0],
      budgets: budgets,
    })
  }

  function findIncome (income) {
    var totIncome = income;
    if (income == null){
      totIncome = 0;
      console.log("?here")
    }
    return totIncome;
  };


  return (
      <div>
        <TopMenu/>
        <Container fluid className="budget-cards">
          <Segment className="date-picker">
            <Header>DATE: </Header>
            <DatePicker selected={selectedDate}
                        onChange={date => setSelectedDate(date)}/>
          </Segment>
                <Segment className="total-income">
                  <Header>TOTAL: ${findIncome(income[0].amount)}</Header>
                  <Segment.Inline>
                    <IncomeModal/>
                    <BudgetModal/>
                  </Segment.Inline>
                </Segment>

          {budgets.map(budget => {
            return (
                <BudgetCard
                    key={budget.id}
                    id={budget.id}
                    name={budget.name}
                    amount={budget.amount}
                    max={budget.max}
                />
            )
          })}
         <BudgetCard name="Groceries" amount={200} max={300}></BudgetCard>
          <Button
              attached='bottom'
              content='Submit Form'
              onClick={handleClick}
          />
        </Container>
      </div>
  );
}


export default AddBudget;
