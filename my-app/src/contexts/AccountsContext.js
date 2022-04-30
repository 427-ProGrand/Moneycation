/* eslint-disable */
import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"

const AccountsContext = React.createContext();


export function useAccounts() {
  return useContext(AccountsContext)
}

export const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useLocalStorage("accounts", [])
  const [forms, setForms] = useLocalStorage("forms", [])



  function addForm({ date, accounts }) {
    console.log(date);
    console.log(accounts);

    setForms(prevForms => {
      return [...prevForms, { id: uuidV4(), date, accounts }]
    })
  }

  function addAccount({ email, username, password }) {
    setAccounts(prevAccounts => {
      if (prevAccounts.find(accounts => accounts.email === email)) {
        return [{ id: uuidV4(),  email, username, password }]
      }
      return [...prevAccounts, { id: uuidV4(), email, username, password }]
    })
  }

  function editAccount({ id, email, username, password }) {
    setAccounts(prevAccounts => {
      if (prevAccounts.find(account => account.email === email)) {
        return prevAccounts
      }
      return [...prevAccounts, { id, email, username, password }]
    })
  }

  function deleteAccount({ id }) {
    setAccounts(prevAccounts => {
      return prevAccounts.filter(account => account.id !== id)
    })
  }

  return (
    <AccountsContext.Provider
      value={{
        accounts,
        forms,
        addAccount,
        addForm,
        editAccount,
        deleteAccount,
      }}
    >
      {children}
    </AccountsContext.Provider>
  )
}
