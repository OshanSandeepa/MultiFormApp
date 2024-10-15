import React, { useState } from 'react';

const Step1 = ({ nextStep, handleFormData, formData }) => {
  const [isRequester, setIsRequester] = useState(formData.isRequester || false);

  const handleCheckboxChange = (e) => {
    setIsRequester(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>1. Your Information</h2>
      <label>Applicant's Name <span>*</span></label>
      <div>
        <input
          type="text"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <label>
        <input
          type="checkbox"
          checked={isRequester}
          onChange={handleCheckboxChange}
        />
        Are you submitting this application on behalf of someone else?
      </label>

      {isRequester && (
        <>
          <div>
            <label>Your Name *</label>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <label>Relationship to Applicant *</label>
          <select required>
            <option value="">Relationship</option>
            <option value="parent">Parent</option>
            <option value="guardian">Guardian</option>
            <option value="other">Other</option>
          </select>
        </>
      )}

      <label>Age<span>*</span></label>
      <div>
        <input type="number" placeholder="MM" required />
        <input type="number" placeholder="DD" required />
        <input type="number" placeholder="YYYY" required />
      </div>

      <label>Does the applicant have a disability? *</label>
      <div>
        <label>
          <input type="radio" name="disability" value="yes" required />
          Yes
        </label>
        <label>
          <input type="radio" name="disability" value="no" />
          No
        </label>
      </div>

      <div className="button-group">
        <button type="submit" className='submitbtn'>Next Step</button>
      </div>
    </form>
  );
};

export default Step1;
