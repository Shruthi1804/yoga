import React, { useState } from 'react';
import axios from 'axios';

const ApplyForm = () => {
  const [form, setForm] = useState({
    name: '',
    certification: '',
    yogaSpecialty: '',
    classPreference: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
  let err = {};
  if (!form.name) err.name = 'Name is required';
  if (!form.certification) err.certification = 'Certification is required';
  if (!form.yogaSpecialty) err.yogaSpecialty = 'Yoga Specialty is required';
  if (!form.classPreference) err.classPreference = 'Class Preference is required';

  if (!form.phoneNumber) {
    err.phoneNumber = 'Phone Number is required';
  } else if (!/^\d{10}$/.test(form.phoneNumber)) {
    err.phoneNumber = 'Invalid phone number format (must be 10 digits)';
  }

  return err;
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post("http://localhost:8080/addInstructor", form);
      setSuccess(true);
      setErrors({});
      setForm({ name: '', certification: '', yogaSpecialty: '', classPreference: '', phoneNumber: '' });
    } catch (error) {
  const msg = error.response?.data?.message || "Server Error";
  setServerError(msg);
}

  };

  return (
    <div className="container mt-4">
      <h3>Apply to Become a Yoga Instructor</h3>
      <form onSubmit={handleSubmit}>
        {['name', 'certification', 'yogaSpecialty', 'classPreference', 'phoneNumber'].map(field => (
          <div className="mb-3" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
            <input
              type="text"
              className="form-control"
              name={field}
              value={form[field]}
              onChange={handleChange}
            />
            {errors[field] && <div className="text-danger">{errors[field]}</div>}
          </div>
        ))}
        <button type="submit" className="btn btn-success">Submit Application</button>
      </form>

      {/* Show modal or message */}
      {success && <div className="alert alert-success mt-3">Instructor submitted successfully!</div>}
      {serverError && <div className="alert alert-danger mt-3">{serverError}</div>}
    </div>
  );
};

export default ApplyForm;
