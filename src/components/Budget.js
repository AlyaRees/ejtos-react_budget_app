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
        <div
          className='green-background'
          style={{
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer', // Add pointer cursor style
          }}
          onClick={() => {
            
          }}
        >
          <span>Currency {changeCurrency}</span>
          <select
            style={{
              appearance: 'none',
              padding: '1px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onChange={(event) => changeCurrency(event.target.value)}
          >
            <option value="£" style={{ backgroundColor: '#15f384', color: 'white'}}>Pound(£)</option>
            <option value="₹">Ruppee(₹)</option>
            <option value="€">Euro(€)</option>
            <option value="$">Dollar($)</option>
          </select>
          <div style={{ position: 'absolute', top: '50%', right: '8px', transform: 'translateY(-50%)' }}>
            {/* Unicode character for a down arrow */}
            &#9660;
          </div>
        </div>
      );
    };

export { Budget, Currency };
