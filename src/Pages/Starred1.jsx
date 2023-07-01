import React, { useState } from 'react';
const Starred1 = () => {
  const [formData, setFormData] = useState({
    firstName: 'Krisha',
    lastName: 'Bhavsar',
    email: '',
  });

  const handleChange = e => {
    setFormData(prevData => ({
      ...prevData,

      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Starred1;
