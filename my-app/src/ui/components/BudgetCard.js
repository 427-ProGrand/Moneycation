/* eslint-disable react/prop-types */
import React from 'react';
import '../../App.css';
import { Icon, Progress, Card, Button } from 'semantic-ui-react';
import { currencyFormatter } from '../../Util';
import EditModal from './EditModal';
import { useBudgets } from '../../contexts/BudgetsContext';

/**
 * Function calculates ratio of budget amount used.
 * Returns the color of the progress bar.s
 * @param amount
 * @param max
 * @returns {string}
 */
function getProgress(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return 'green';
  if (ratio < 0.75) return 'yellow';
  return 'red';
}

/**
 * Budget Card is displayed on Add Budget Page
 *
 * @param name
 * @param amount
 * @param max
 */
export default function BudgetCard({ id, name, amount, max }) {
  const { budgets, deleteBudget } = useBudgets();
  const budget = budgets.find((b) => b.id);

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <div>{name}</div>
          <div>
            {currencyFormatter.format(amount)}
            /
            {currencyFormatter.format(max)}
          </div>
        </Card.Header>
        <Progress color={getProgress(amount, max)} value={amount} total={max} />
        <Button icon onClick={() => { deleteBudget(budget); }}>
          <Icon name="trash" />
        </Button>
        <EditModal budgetId={id}/>
      </Card.Content>
    </Card>
  );
}
