// src/EventRegistrationForm.js
import React, { useState } from 'react';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!formData.age) {
      tempErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age <= 0) {
      tempErrors.age = 'Age must be a number greater than 0';
    }
    if (formData.attendingWithGuest === 'Yes' && !formData.guestName) {
      tempErrors.guestName = 'Guest Name is required if attending with a guest';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <span>{errors.age}</span>}
        </div>
        <div>
          <label>Are you attending with a guest?</label>
          <select name="attendingWithGuest" value={formData.attendingWithGuest} onChange={handleChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {formData.attendingWithGuest === 'Yes' && (
          <div>
            <label>Guest Name:</label>
            <input type="text" name="guestName" value={formData.guestName} onChange={handleChange} />
            {errors.guestName && <span>{errors.guestName}</span>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>Attending with guest: {formData.attendingWithGuest}</p>
          {formData.attendingWithGuest === 'Yes' && <p>Guest Name: {formData.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default EventRegistrationForm;
