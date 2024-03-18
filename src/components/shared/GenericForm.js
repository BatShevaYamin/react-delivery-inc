import React, { useState } from 'react';

const GenericForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};

    // Validate each field
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
        isValid = false;
      }
      // Add additional validations as needed
    });

    // If any field is invalid, set errors and prevent submission
    if (!isValid) {
      setErrors(newErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type || 'text'}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
          />
          {errors[field.name] && <div style={{ color: 'red' }}>{errors[field.name]}</div>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default GenericForm;
