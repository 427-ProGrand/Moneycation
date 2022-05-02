/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Modal, Form, Header, Button } from 'semantic-ui-react';
import { useBudgets } from '../../contexts/BudgetsContext';

/**
 * Income Form Modal
 * Form asks for 'Name','Budget Amount Used','Budget Amount'
 */
function IncomeModal() {
  const [open, setOpen] = React.useState(false);
  const amountRef = useRef();
  const { addIncome } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addIncome({
      amount: amountRef.current.value,
    });
  }

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Update Income</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Input Income"/>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label>Amount</label>
            <input type="number" step="0.01" ref={amountRef}/>
          </Form.Field>
          <Form.Button content="Submit"/>
        </Form>
      </Modal.Content>
    </Modal>

  );
}

export default IncomeModal;
