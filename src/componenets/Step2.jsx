import React, { useState, useEffect } from 'react';

const Step2 = ({ prevStep, nextStep, handleFormData, formData }) => {
  const [mealPlan, setMealPlan] = useState(formData.mealPlan || '');
  const [daysRequested, setDaysRequested] = useState(formData.daysRequested || []);

  
  useEffect(() => {
    if (mealPlan === 'full') {
      setDaysRequested(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    } else {
      setDaysRequested([]);
    }
  }, [mealPlan]);

  const handleDaysChange = (day) => {
    if (mealPlan !== 'full') {
      setDaysRequested((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormData({ mealPlan, daysRequested });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>2. Requested Services</h2>

      <label>Choose the Meal Plan *</label>
      <div>
        <input
          type="radio"
          value="full"
          checked={mealPlan === 'full'}
          onChange={() => setMealPlan('full')}
        />
        <label>Full 21 meals</label>   <br />
        <input
          type="radio"
          value="lunch_dinner"
          checked={mealPlan === 'lunch_dinner'}
          onChange={() => setMealPlan('lunch_dinner')}
        />
        <label>Lunch and Dinner</label>   <br />

        <input
          type="radio"
          value="dinner_only"
          checked={mealPlan === 'dinner_only'}
          onChange={() => setMealPlan('dinner_only')}
        />
        <label>Only Dinner</label>
      </div>

      <label>Days Requested *</label>
      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
        <div key={day}>
          <input
            type="checkbox"
            checked={daysRequested.includes(day)}
            onChange={() => handleDaysChange(day)}
            disabled={mealPlan === 'full' && !daysRequested.includes(day)} 
          />
          <label>{day}</label>
        </div>
      ))}

      <div className="button-group">
        <button type="button" onClick={prevStep} className='backbtn'>Back</button>
        <button type="submit" className='submitbtn'>Next Step</button>
      </div>
    </form>
  );
};

export default Step2;
