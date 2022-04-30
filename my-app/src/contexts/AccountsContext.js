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
    if (check) { // if there's already an account, you can't make a new one
      console.log("Error! There's already an account made.");
      return false;
    } else {
      console.log("Account successfully added!");
      setAccounts(prevAccounts => {
        return [{ id: uuidV4(), email, username, password }]
      })
    }}

  function editPassword({ currentPassword, newPassword, newPasswordC }) {
    // get account
    const allaccounts = JSON.parse(localStorage.getItem("accounts"));
    const account = allaccounts[0];
    console.log(accounts);
    console.log(account);
    // save account
    if(currentPassword == account.password && newPassword == newPasswordC) {
      account.password = newPassword;
      const newA = [account];
      setAccounts(newA);
      return true;
    } else {
      console.log("it's wrong")
      return false;
    }
  }

  function deleteAccount({ id }) {
    setAccounts(prevAccounts => {
      return prevAccounts.filter(account => account.id !== id)
    })
  }

  function checkAccount({id, username, password}) {
    const allaccounts = JSON.parse(localStorage.getItem("accounts"));
    const account = allaccounts[0];

    if (account.username == username && account.password == password) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <AccountsContext.Provider
      value={{
        accounts,
        forms,
        checkAccount,
        addAccount,
        addForm,
        editPassword,
        deleteAccount,
      }}
    >
      {children}
    </AccountsContext.Provider>
  )
}
