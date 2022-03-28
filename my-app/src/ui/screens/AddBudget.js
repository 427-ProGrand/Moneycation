import '../../App.css';
import { useState } from "react"
import {Container, Grid, Form, Segment, Header, Table, Button, Divider} from 'semantic-ui-react';
import BudgetForm from '../components/BudgetForm';
import TopMenu from '../components/TopMenu';
import BudgetCard from '../components/BudgetCard';
import BudgetModal from '../components/BudgetModal';
import IncomeModal from '../components/AddIncome';
import { useBudgets } from "../../contexts/BudgetsContext";

/**
 * Add Budget Function Component
 * Displays Income, buttons to 'Add Income' 'Add Budget'
 * Displays Budget Cards
 * ***TODO: ATTACH INCOME TO USER AND DISPLAY**
 */
function AddBudget() {
  const { budgets } = useBudgets()
  const { income } = useBudgets()

  return (
      <div>
        <TopMenu/>
        <Container fluid className="budget-cards">
          <Segment className="total-income">
            <Header>TOTAL: $1000</Header>
            <Segment.Inline>
              <IncomeModal/>
              <BudgetModal/>
            </Segment.Inline>
          </Segment>
          {budgets.map(budget => {
            return (
                <BudgetCard
                    key={budget.id}
                    name={budget.name}
                    amount={budget.amount}
                    max={budget.max}
                />
            )
          })}
         <BudgetCard name="Groceries" amount={200} max={300}></BudgetCard>
        </Container>
      </div>
  );
}


export default AddBudget;