import React, { useState } from 'react'
import { useExpense } from '../context/ExpenseContext';


const DebitForm = () => {
    const [expenseItemName, setExpenseItemName] = useState('')
    const [expenseItemAmount, setExpenseItemAmount] = useState(0)
    const [expenseType, setExpenseType] = useState('');

    const { setItemName, setItemAmount, setItemType, userWallet, setUserWallet } = useExpense();

    const onSubmitExpense = (e) => {
        e.preventDefault();
        setItemName(expenseItemName);
        setItemAmount(expenseItemAmount);
        setItemType(expenseType);
        if (expenseType === 'Debit') {
            let netAmount = userWallet - expenseItemAmount;
            setUserWallet(netAmount);
        }
        else if(expenseType === 'Credit'){
            let netAmount = userWallet + expenseItemAmount;
            setUserWallet(netAmount);
        }
    }

    return (
        <form className='tracker_form w-full flex flex-col gap-3' onSubmit={onSubmitExpense}>
            <h4 className='main-heading font-medium text-xl'>Track Your Expenses</h4>
            <div className="expense_info flex items-center justify-between gap-4">
                <div className="expense_name flex flex-col gap-1 w-full">
                    <label htmlFor="expense_name">Item Regards:</label>
                    <input type="text" value={expenseItemName} onChange={(e) => setExpenseItemName(e.target.value)} name='expense_name' placeholder='Buy Cycle / Salary Amount ..' required />
                </div>
            </div>
            <div className="expenses_amount flex items-end justify-between gap-4">
                <div className="amount flex flex-col gap-1 w-full">
                    <label htmlFor="amount">Debit Amount / Credit Amount:</label>
                    <input type="number" value={expenseItemAmount} onChange={(e) => setExpenseItemAmount(e.target.value)} name='amount' placeholder='$1200' required />
                </div>
                <div className="expense_date flex flex-col gap-1 w-full">
                    <button type='submit text-xs'>Submit</button>
                </div>
            </div>
            <div className="expense_radio flex flex-col gap-1 w-full">
                <label htmlFor="expense_radio">Select Amount Type:</label>
                <div className="radio_btns flex gap-1 items-center">
                    <p className='flex gap-1 items-center text-sm'>
                        <input type="radio" value="Debit" onChange={(e)=>setExpenseType(e.target.value)} name="expense_radio" id="expense_Cradio" placeholder='Debit' required />
                        Debit
                    </p>
                    <p className='flex gap-1 items-center text-sm'>
                        <input type="radio" value="Credit" onChange={(e)=>setExpenseType(e.target.value)} name="expense_radio" id="expense_Dradio" placeholder='Credit' required />
                        Credit
                    </p>
                </div>
            </div>
        </form>
    )
}

export default DebitForm;