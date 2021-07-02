import styles from './FormContactService.module.scss';
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
  phone: number;
  email: string;
  help: string;
}


export const FormContactService: React.FC<{}> = () => {
  const initialValues: MyFormValues = { 
    firstName: '',
    phoneNamber: '',
    email: '',
    help: ''
  };
  return (
    <div className={styles.formService}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field name="firstName" placeholder="Enter Full Name" />
          <Field name="email" placeholder="Enter email address" />
          <Field name="phoneNamber" placeholder="Enter phone number" />
          
          <Field name="help" as="select">
            <option value="">How can we help?</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <button type="submit">Request Callback</button>
        </Form>
      </Formik>
    </div>
  );
};