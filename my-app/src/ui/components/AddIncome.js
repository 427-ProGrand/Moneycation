import React from 'react'
import { useRef } from "react"
import {Modal, Icon, Container, Progress, Card, Grid, Form, Segment, Header, Table, Button, Divider} from 'semantic-ui-react';
import { useBudgets } from "../../contexts/BudgetsContext";

/**
 * Income Form Modal
 * Form asks for 'Name','Budget Amount Used','Budget Amount'
 *  ***TODO: MAKE ALL FIELDS REQUIRED, CLOSE WHEN SUBMIT****
 */
function IncomeModal(){
  const [open, setOpen] = React.useState(false)
  const amountRef = useRef()
  const { addIncome } = useBudgets()

  function handleSubmit (e) {
    e.preventDefault();
    addIncome({
      amount: amountRef.current.value,
    })
  };

  return(
      <Modal
          closeIcon
          open={open}
          trigger={<Button>Add Income</Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
      >
        <Header icon='archive' content='New Budget' />
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field required>
              <label>Amount</label>
              <input type='number' ref={amountRef}/>
            </Form.Field>
            <Form.Button content='Submit' />
          </Form>
        </Modal.Content>
      </Modal>

  )
}

export default IncomeModal