import styles from './FormContact.module.scss';
import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';


interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}


export const FormContact: React.FC<{}> = () => {
  const initialValues: MyFormValues = { 
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };
  return (
    <div className={styles.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field name="firstName" placeholder="First Name :" />
          <Field name="lastName" placeholder="Last Name :" />
          <Field name="email" placeholder="Email :" />
          <Field as="textarea" name="message" placeholder="Message :" />
          <button type="submit">SEND NOW</button>
        </Form>
      </Formik>
    </div>
  );
};