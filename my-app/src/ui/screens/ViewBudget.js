import '../../App.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Segment, Header, Button } from 'semantic-ui-react';
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
function ViewBudget() {
  const { budgets } = useBudgets();
  const { income } = useBudgets();
  const { addForm } = useBudgets();
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick = () => {
    addForm({
      date: selectedDate,
      income: income[0],
      budgets,
    });
  };

  return (
    <div>
      <TopMenu/>
      <Container fluid className="budget-cards">
        <Segment className="date-picker">
          <Header>DATE: </Header>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </Segment>
        <Segment className="total-income">
          <Header>
            TOTAL: $
            {income[0].amount}
          </Header>
          <Segment.Inline>
            <IncomeModal/>
            <BudgetModal/>
          </Segment.Inline>
        </Segment>

        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            name={budget.name}
            amount={budget.amount}
            max={budget.max}
          />
        ))}
        <BudgetCard name="Groceries" amount={200} max={300} />
        <Button
          attached="bottom"
          content="Submit Form"
          onClick={handleClick}
        />
      </Container>
    </div>
  );
}

export default ViewBudget;
