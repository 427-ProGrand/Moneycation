/* eslint-disable */
import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext();


export function useBudgets() {
  return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", [])
  const [income, setIncome] = useLocalStorage("income", [{amount: "0"}])
  const [forms, setForms] = useLocalStorage("forms", [])

  function addIncome({ amount }) {
    setIncome(prevIncome => {
      return [{ id: uuidV4(), amount }]
    })
  }

  function addForm({ date, income, budgets }) {
    console.log(date);
    console.log(income);
    console.log(budgets);

    setForms(prevForms => {
      return [...prevForms, { id: uuidV4(), date, income, budgets }]
    })
  }

  function addBudget({ name, amount, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budgets => budgets.name === name)) {
        return [{ id: uuidV4(),  name, amount, max }]
      }
      return [...prevBudgets, { id: uuidV4(), name, amount, max }]
    })
  }

  function editBudget({ id, name, amount, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budget => budget.name === name)) {
        return prevBudgets
      }
      return [...prevBudgets, { id, name, amount, max }]
    })
  }

  function deleteBudget({ id }) {
    setBudgets(prevBudgets => {
      return prevBudgets.filter(budget => budget.id !== id)
    })
  }

  return (
      <BudgetsContext.Provider
          value={{
            income,
            budgets,
            forms,
            addBudget,
            addForm,
            addIncome,
            editBudget,
            deleteBudget,
          }}
      >
        {children}
      </BudgetsContext.Provider>
  )
}
