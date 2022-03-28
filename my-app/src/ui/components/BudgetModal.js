import React from 'react'
import { useRef } from "react"
import {Modal, Icon, Container, Progress, Card, Grid, Form, Segment, Header, Table, Button, Divider} from 'semantic-ui-react';
import { useBudgets } from "../../contexts/BudgetsContext";

/**
 * Budget Form Modal
 * Form asks for 'Name','Budget Amount Used','Budget Amount'
 *  ***TODO: MAKE ALL FIELDS REQUIRED, CLOSE WHEN SUBMIT****
 */
function BudgetModal(){
  const [open, setOpen] = React.useState(false)
  const nameRef = useRef()
  const amountRef = useRef()
  const maxRef = useRef()
  const { addBudget } = useBudgets()

  function handleSubmit (e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      amount: amountRef.current.value,
      max: parseFloat(maxRef.current.value),
    })
  };

  return(
      <Modal
          closeIcon
          open={open}
          trigger={<Button>Add Budget</Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
      >
        <Header icon='archive' content='New Budget' />
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field required>
              <label>Name</label>
              <input ref={nameRef}/>
            </Form.Field>
            <Form.Field required>
              <label>Amount</label>
              <input type='number' ref={amountRef}/>
            </Form.Field>
            <Form.Field required>
              <label>Budget Max</label>
              <input type='number' ref={maxRef}/>
            </Form.Field>
            <Form.Button content='Submit' />
          </Form>
        </Modal.Content>
      </Modal>

  )
}

export default BudgetModal