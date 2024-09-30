import React, { useEffect } from 'react'
import ExpenseHistory from './ExpenseHistory';
import DebitForm from './DebitForm';
import { useExpense } from '../context/ExpenseContext';

const Form = () => {
    const {userWallet} = useExpense();
    return (
        <div className='form_box flex flex-col items-start justify-start p-8 gap-6'>
            <div className="user_info flex flex-col gap-4 items-center justify-center w-full">
                <h3 className='user_greeting text-2xl font-semibold'>Hi Najaf!</h3>
                <h2 className='curr_ammount text-end font-bold text-4xl'>${userWallet > 0 ? userWallet : 0}<sub className='text-xs font-light italic ml-2'>Money You've.</sub></h2>
            </div>
            <DebitForm />
            <ExpenseHistory />
            <p className="coyright self-center text-xs font-bold mt-7">Copyright &copy; 2024 Designed & Developed By Najaf Ali Balti.</p>
        </div>
    )
}

export default Form