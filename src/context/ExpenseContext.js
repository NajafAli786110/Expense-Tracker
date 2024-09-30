import React, { createContext, useContext } from 'react'

export const ExpenseContext = createContext();

export const ExpenseProvider = ExpenseContext.Provider;

export const useExpense = () =>{
    return useContext(ExpenseContext);
}
