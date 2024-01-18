import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, remaining } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  const handleSaveBudget = () => {
    const parsedBudget = parseFloat(newBudget);

    if (parsedBudget >= remaining) {
      // Dispatch an action to update the budget
      dispatch({ type: 'SET_BUDGET', payload: parsedBudget });
    } else {
      alert("You cannot reduce the budget value lower than the spending");
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: </span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
      <button onClick={handleSaveBudget}>Save</button>
    </div>
  );
};

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    };
    
  return (
        <div className='green-background'> Currency 
      <select className='green-background select' name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">Pound(£)</option>
        <option value="₹">Ruppee(₹)</option>
        <option value="€">Euro(€)</option>
        <option value="$">Dollar($)</option>
      </select>	
    </div>
    );
};

export { Budget, Currency };
