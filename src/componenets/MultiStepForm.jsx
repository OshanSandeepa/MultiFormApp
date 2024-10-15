import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';  
import ProgressBar from './ProgressBar';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleFormData = (data) => setFormData({ ...formData, ...data });

  return (
    <div className="form-container">
      <ProgressBar currentStep={step} />
      {step === 1 && (
        <Step1 nextStep={nextStep} handleFormData={handleFormData} formData={formData} />
      )}
      {step === 2 && (
        <Step2
          prevStep={prevStep}
          nextStep={nextStep}
          handleFormData={handleFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <Step3
          prevStep={prevStep}
          nextStep={nextStep}
          handleFormData={handleFormData}
          formData={formData}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
