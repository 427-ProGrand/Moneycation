/* eslint-disable  react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-bind */
import React, { useRef } from 'react';
import { Modal, Form, Header, Button } from 'semantic-ui-react';
import { useBudgets } from '../../contexts/BudgetsContext';

function EditModal({ budgetId }) {
  const [open, setOpen] = React.useState(false);
  const [bid, setBid] = React.useState();
  const [nameTemp, setNameTemp] = React.useState();
  const [amountTemp, setAmountTemp] = React.useState();
  const [maxTemp, setMaxTemp] = React.useState();
  const nameRef = useRef();
  const amountRef = useRef();
  const maxRef = useRef();
  const { editBudget, getBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(bid);
    editBudget({
      id: bid,
      name: nameRef.current.value,
      amount: amountRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    setOpen(false);
  }

  function handleGetText() {
    setBid(budgetId);
    console.log(budgetId);
    console.log(bid);
    setNameTemp(getBudget(budgetId).name);
    setAmountTemp(getBudget(budgetId).amount);
    setMaxTemp(getBudget(budgetId).max);
    setOpen(true);
  }

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Edit Budget</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => handleGetText()}
    >
      <Header icon="archive" content="Edit Budget" />
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label>Name</label>
            <input defaultValue={nameTemp} ref={nameRef}/>
          </Form.Field>
          <Form.Field required>
            <label>Amount</label>
            <input type="number" defaultValue={amountTemp} ref={amountRef}/>
          </Form.Field>
          <Form.Field required>
            <label>Budget Max</label>
            <input type="number" defaultValue={maxTemp} ref={maxRef}/>
          </Form.Field>
          <Form.Button content="Submit" />
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default EditModal;
