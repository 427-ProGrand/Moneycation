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
    const check = localStorage.getItem("accounts");
    if (check != "[]") { // if there's already an account, you can't make a new one
      console.log("Error! There's already an account made.");
      return false;
    } else {
      localStorage.setItem("isAuthenticated", "true");
      console.log("Account successfully added!");
      setAccounts(prevAccounts => {
        return [{ id: uuidV4(), email, username, password }]
      })
    }}

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

  function checkAccount({id, username, password}) {
    const allaccounts = JSON.parse(localStorage.getItem("accounts"));
    const account = allaccounts[0];

    if(account.username == username && account.password == password){
      localStorage.setItem("isAuthenticated", "true");
      return true;
    } else {
      return false;
    }
  }
  /*
    setAccounts(prevAccounts => {
    if (localStorage.getItem("accounts").then(account => account.username === username && account.password == password)) {
      console.log("Correct log in");
      return true
    } else {
      console.log("Username and/or password does not match!");
      return false
    }
  })
console.log(localStorage.getItem("accounts"));
    if(localStorage.getItem("accounts")[0].username == username && localStorage.getItem("accounts")[0].password == password){
      return true;
    } else {
      return false;
    }
  }*/


  return (
    <AccountsContext.Provider
      value={{
        accounts,
        forms,
        checkAccount,
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
