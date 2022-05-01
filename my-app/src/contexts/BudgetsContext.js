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
    window.location = '/budgetForm';
  }

  function addForm({ date, income, budgets }) {
    console.log(date);
    console.log(income);
    console.log(budgets);

    setForms(prevForms => {
      return [...prevForms, { id: uuidV4(), date, income, budgets }]
    })
  }

  function getBudget(id) {
    const allbudgets = JSON.parse(localStorage.getItem("budgets"));
    const cbudget = allbudgets.find(b => b.id === id);
    return cbudget;
  }

  function addBudget({ name, amount, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budgets => budgets.name === name)) {
        return [{ id: uuidV4(),  name, amount, max }]
      }
      return [...prevBudgets, { id: uuidV4(), name, amount, max }]
    })
    window.location = '/budgetForm';
  }

  function editBudget({ id, name, amount, max }) {
    console.log(budgets)
    budgets.map(b => {if(b.id === id) {b.name = name; b.amount = amount; b.max = max; console.log(b);}})
    console.log(budgets)
    setBudgets(budgets);
    localStorage.setItem("budgets", JSON.stringify(budgets))
    window.location = '/budgetForm';
  }

  function deleteBudget({ id }) {
    setBudgets(prevBudgets => {
      return prevBudgets.filter(budget => budget.id !== id)
    })
  }

  function calendMoney() {
    var totIncome = income[0].amount;
    budgets.map(b => totIncome -= b.amount);
    return totIncome;
  }

  function calBudgetMoney() {
    var totIncome = 0;
    budgets.map(b => totIncome += b.max);
    return totIncome;
  }

  function calSpentMoney() {
    var totIncome = parseInt(0);
    budgets.map(b => totIncome = totIncome + parseInt(b.amount));
    return totIncome;
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
            calendMoney,
            calBudgetMoney,
            calSpentMoney,
            getBudget,
            editBudget,
            deleteBudget,
          }}
      >
        {children}
      </BudgetsContext.Provider>
  )
}
