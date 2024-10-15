import React from 'react';
import '../styles/formStyles.css';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-bar">
      {[1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={`progress-step ${currentStep >= step ? 'completed' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
