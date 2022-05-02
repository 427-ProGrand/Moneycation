import '../../App.css';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Grid, Segment, Header } from 'semantic-ui-react';
import TopMenu from '../components/TopMenu';
import BudgetCard from '../components/BudgetCard';
import BudgetModal from '../components/BudgetModal';
import IncomeModal from '../components/AddIncome';
import { useBudgets } from '../../contexts/BudgetsContext';

/**
 * Add Budget Function Component
 * Displays Income, buttons to 'Add Income' 'Add Budget'
 * Displays Budget Cards
 */
function AddBudget() {
  const { budgets, income, calendMoney, calBudgetMoney, calSpentMoney } = useBudgets();

  function setRColor(money) {
    if (money > -1) {
      return 'green';
    } if (money === 0) {
      return 'black';
    }
    return 'red';
  }

  function setBColor(money) {
    if (money > -1) {
      return 'green';
    } if (money === 0) {
      return 'black';
    }
    return 'red';
  }

  function setBTColor(money) {
    if (money < income[0].amount) {
      return 'green';
    } if (money === income[0].amount) {
      return 'black';
    }
    return 'red';
  }

  return (
    <div className="App">
      <TopMenu/>
      <div className="settings-container">
        <Container fluid className="budget-cards">
          <Segment className="total-income">
            <Header>
              Total Income:
              {income[0].amount}
            </Header>
            <Segment.Inline>
              <IncomeModal/>
              <BudgetModal/>
            </Segment.Inline>
          </Segment>

          <Grid relaxed columns={5}>
            {budgets.map((budget) => (
              <Grid.Column>
                <BudgetCard
                  key={budget.id}
                  id={budget.id}
                  name={budget.name}
                  amount={budget.amount}
                  max={budget.max}
                />
              </Grid.Column>
            ))}
          </Grid>
          <Segment>
            <Header className={setBTColor(calBudgetMoney())}>
              Total Budget Money: $
              {calBudgetMoney()}
            </Header>
            <Header className={setBColor(calSpentMoney())}>
              Total Budget Money Spent: $
              {calSpentMoney()}
            </Header>
            <Header className={setRColor(calendMoney())}>
              Remaining Money: $
              {calendMoney()}
            </Header>
          </Segment>
        </Container>
      </div>
    </div>
  );
}

export default AddBudget;
