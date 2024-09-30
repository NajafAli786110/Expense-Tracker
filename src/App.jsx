import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToggleBtn from './components/ToggleBtn';
import { ExpenseProvider, useExpense } from './context/ExpenseContext';

function App() {
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [itemType, setItemType] = useState('');
  const [userWallet, setUserWallet] = useState('');

  // Fetched data from local Storage
  useEffect(() => {
    const storeItemName = localStorage.getItem('itemName');
    const storeItemAmount = localStorage.getItem('itemAmount');
    const storeUserWallet = localStorage.getItem('userWallet');

    if (storeItemName) setItemName(storeItemName);
    if (storeItemAmount) setItemAmount(storeItemAmount);
    if (storeUserWallet) setUserWallet(storeUserWallet);
  }, []);

  useEffect(() => {
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('itemAmount', itemAmount);
    localStorage.setItem('userWallet', userWallet);
  }, [itemName, itemAmount, userWallet]);

  return (
    <ExpenseProvider value={{  itemName, itemAmount, itemType, userWallet, setItemName, setItemAmount, setItemType, setUserWallet }}>
      <Form />
      <ToggleBtn />
    </ExpenseProvider>
  );
}

export default App;
