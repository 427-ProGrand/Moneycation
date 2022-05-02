/* eslint-disable */
import React, { useContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const AccountsContext = React.createContext();

export function useAccounts() {
  return useContext(AccountsContext);
}

export const AccountsProvider = ({ children }) => {
  const [accounts, setAccounts] = useLocalStorage('accounts', []);
  const [forms, setForms] = useLocalStorage('forms', []);

  function addForm({ date, accounts }) {
    console.log(date);
    console.log(accounts);

    setForms(prevForms => {
      return [...prevForms, {
        id: uuidV4(),
        date,
        accounts
      }];
    });
  }

  function addAccount({ email, username, password }) {
    const check = localStorage.getItem('accounts');
    console.log(check);
    console.log(check[0]);
    if ((check == null || check == '[]') & pwCheck(password)) {
      localStorage.setItem('isAuthenticated', 'true');
      console.log('Account successfully added!');
      setAccounts(prevAccounts => {
        return [{
          id: uuidV4(),
          email,
          username,
          password
        }];
      });
    } else { // if there's already an account, you can't make a new one
      console.log('Error! There\'s already an account made.');
      return false;
    }
  }

  function editAccount({ id, email, username, password }) {
    setAccounts(prevAccounts => {
      if (prevAccounts.find(account => account.email === email)) {
        return prevAccounts;
      }
      return [...prevAccounts, {
        id,
        email,
        username,
        password
      }];
    });
  }

  function editPassword({ currentPassword, newPassword, newPasswordC }) {
    // get account
    const allaccounts = JSON.parse(localStorage.getItem('accounts'));
    const account = allaccounts[0];
    console.log(accounts);
    console.log(account);
    // save account
    if (currentPassword == account.password && newPassword == newPasswordC && pwCheck(newPassword)) {
      account.password = newPassword;
      const newA = [account];
      setAccounts(newA);
      return true;
    } else {
      console.log('it\'s wrong');
      return false;
    }
  }

  function deleteAccount() {
    const allaccounts = JSON.parse(localStorage.getItem('accounts'));
    const account = allaccounts[0];
    console.log('delete');
    localStorage.clear();
    window.location = '/';
  }

  function checkAccount({ id, username, password }) {
    const allaccounts = JSON.parse(localStorage.getItem('accounts'));
    const account = allaccounts[0];

    if (!account) {
      return 1;
    }
    if (account.username == username && account.password == password) {
      localStorage.setItem('isAuthenticated', 'true');
      return 2;
    } else {
      return 3;
    }
  }

  function pwCheck(password) {
    if (password.length > 7) {
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
        pwCheck,
        addAccount,
        addForm,
        editPassword,
        deleteAccount,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};
