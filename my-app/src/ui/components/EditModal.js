import React from 'react'
import { useRef } from "react"
import {Modal, Icon, Container, Progress, Card, Grid, Form, Segment, Header, Table, Button, Divider} from 'semantic-ui-react';
import { useBudgets } from "../../contexts/BudgetsContext";

function EditModal({budgetId}){
  const [open, setOpen] = React.useState(false)
  const nameRef = useRef()
  const amountRef = useRef()
  const maxRef = useRef()
  const { addBudget, editBudget } = useBudgets()
  function handleChange (e) {

  }

  function handleSubmit (e) {
    e.preventDefault();
    editBudget({
      id: budgetId.current.value,
      name: nameRef.current.value,
      amount: amountRef.current.value,
      max: parseFloat(maxRef.current.value),
    })
  };


  return(
      <Modal
          closeIcon
          open={open}
          trigger={<Button>Edit Budget</Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
      >
        <Header icon='archive' content='Edit Budget' />
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

export default EditModal