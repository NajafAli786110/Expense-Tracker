import React, { useEffect, useState } from 'react';
import { useExpense } from '../context/ExpenseContext';

const ExpenseHistory = () => {
    const { itemName, itemAmount } = useExpense();

    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (itemName && itemAmount) {
            setHistory(prevHistory => [...prevHistory, { name: itemName, amount: itemAmount }]);
        }
        else "No History Found!"
    }, [itemName, itemAmount]);

    return (
        <div className="history flex flex-col gap-4 items-center justify-center w-full">
            <h3 className="user_greeting text-2xl font-semibold self-start">History</h3>
            <ol className="history flex flex-col gap-4 w-full items-center justify-between">
                {history.length > 0 ? (history.map((expense, index) => (
                    <li key={index} className="flex gap-4 w-full items-center justify-between">
                        <h4 className="item_name text-base font-normal">{expense.name}</h4>
                        <p className="item_amount">${expense.amount}</p>
                    </li>
                ))
                ) : (
                'No History Found!'
                    )}
            </ol>
        </div>
    );
};

export default ExpenseHistory;
