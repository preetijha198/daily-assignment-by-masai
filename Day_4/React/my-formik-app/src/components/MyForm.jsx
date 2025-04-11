// src/components/MyForm.jsx
import React from 'react';
import { useFormik } from 'formik';

// Validation rules
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
    },
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Form with Validation (Formik)</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
