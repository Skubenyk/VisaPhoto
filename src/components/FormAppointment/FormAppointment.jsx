//*FormAppointment

//*Import base
import React from 'react';
import styles from './formAppointment.module.scss';
import classNames from 'classnames';

//*Import Libraries
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FormAppointment = ({ active, setActive }) => {
  const URL = 'https://vetclinic-backend.onrender.com/api/users/send-email';
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Minimum 2 characters')
        .required('Obligatory field!'),
      email: Yup.string()
        .email('Incorrect email address')
        .required('Obligatory field!'),
      text: Yup.string()
        .min(30, 'Minimum 30 characters')
        .required('Obligatory field!'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
      sendData(values);
      setActive(false);
    },
  });

  const sendData = async (formData) => {
    try {
      const response = await axios.post(URL, formData, {
        headers: {
          Appointment: 'form appointment',
        },
      });
      console.log(response.data);
      alert('The message has been sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('The message has not been sent!');
    }
  };

  return (
    <div
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
      onClick={() => setActive(false)}
    >
      <div className={styles.form} onClick={(e) => e.stopPropagation()}>
        <div className={styles.formWrapper}>
          <form action='#' method='post' onSubmit={formik.handleSubmit}>
            <div className={styles.conntainerForm}>
              <h2 className={styles.titleForm}>Сontact us</h2>
              <div className={styles.formContent}>
                <label htmlFor='name'></label>
                <input
                  className={styles.name}
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className={styles.error}>{formik.errors.name}</div>
                ) : null}
                <label htmlFor='email'></label>
                <input
                  className={styles.tel}
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className={styles.error}>{formik.errors.email}</div>
                ) : null}
                <label htmlFor='text'></label>
                <textarea
                  className={styles.formContentText}
                  rows='8'
                  placeholder='Describe your question'
                  name='text'
                  value={formik.values.text}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.text && formik.touched.text ? (
                  <div className={styles.error}>{formik.errors.text}</div>
                ) : null}
              </div>
              <div className={styles.formButton}>
                <button className={styles.buttonSubmit} type='submit'>
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAppointment;
