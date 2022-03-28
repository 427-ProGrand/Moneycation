import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext()


export function useBudgets() {
  return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", [])
  const [income, setIncome] = useLocalStorage("income", [])

  function addIncome({ amount }) {
    setIncome(prevIncome => {
      return [...prevIncome, { id: uuidV4(), amount }]
    })
  }

  function addBudget({ name, amount, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budget => budget.name === name)) {
        return prevBudgets
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
            addBudget,
            addIncome,
            editBudget,
            deleteBudget,
          }}
      >
        {children}
      </BudgetsContext.Provider>
  )
}