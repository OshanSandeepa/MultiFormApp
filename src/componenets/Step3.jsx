import React, { useState } from 'react';

const Step3 = ({ prevStep, nextStep, handleFormData, formData }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    streetName: formData.streetName || '',
    apartment: formData.apartment || '',
    city: formData.city || '',
    state: formData.state || '',
    postalCode: formData.postalCode || '',
    country: 'Sri Lanka',  
    deliveryInstructions: formData.deliveryInstructions || '',
    phoneNumber: formData.phoneNumber || '',
    secondaryPhoneNumber: formData.secondaryPhoneNumber || '',
    email: formData.email || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deliveryInfo.country !== 'Sri Lanka') {
      alert('Country must be Sri Lanka!');
      return;
    }
    handleFormData(deliveryInfo);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>3. Delivery and Contact Information</h3>
      <div>
       
        <label><b>Delivery Address</b> <span>*</span></label> <br />
        <input
          type="text"
          name="streetName"
          placeholder="Street Name"
          value={deliveryInfo.streetName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apartment"
          placeholder="Apartment, Suite, Etc"
          value={deliveryInfo.apartment}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={deliveryInfo.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={deliveryInfo.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal / Zip Code"
          value={deliveryInfo.postalCode}
          onChange={handleChange}
          required
        />
        <select
          name="country"
          value={deliveryInfo.country}
          onChange={handleChange}
          
        >
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="japan">Japan</option>
          <option value="india">India</option>
        </select>
      </div>
      <div>
        <label>Delivery Instructions (optional)</label> <br />
        <textarea 
          name="deliveryInstructions"
          placeholder="i.e., condo gate, phone first, dog will eat you, etc."
          value={deliveryInfo.deliveryInstructions}
          onChange={handleChange}
          maxLength="75"
        />
      </div>
      <div>
        <b>Contact Information <span>*</span></b> <br />
        <label htmlFor=""><b>Phone Number</b></label><br />
        

        <input 
          type="tel"
          name="phoneNumber"
          placeholder="XXX-XXX-XXXX"
          value={deliveryInfo.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="XXX-XXX-XXXX"
          value={deliveryInfo.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="XXX-XXX-XXXX"
          value={deliveryInfo.phoneNumber}
          onChange={handleChange}
          required
        />
        
        <br />
        <label htmlFor=""><b>Secondary Phone Number</b></label><br />
        <input
          type="tel"
          name="secondaryPhoneNumber"
          placeholder="XXX-XXX-XXXX"
          value={deliveryInfo.secondaryPhoneNumber}
          onChange={handleChange}
        />  <br />

        <label htmlFor=""><b>Email <span>*</span></b></label><br />
        <input
          type="email"
          name="email"
          placeholder="applicant.email@email.com"
          value={deliveryInfo.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-group">
        <button className='backbtn' type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit" className='submitbtn'>Next Step</button>
      </div>
    </form>
  );
};

export default Step3;
