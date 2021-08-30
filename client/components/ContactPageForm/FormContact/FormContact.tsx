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
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

interface MyFormValues {
  firstName: string;
  subject: string;
  phone: string;
  email: string;
  message: string;
  help: string;
}


export const FormContact: React.FC<{}> = () => {
  const initialValues: MyFormValues = { 
    firstName: '',
    subject: '',
    phone: '',
    message: '',
    email: '',
    help: ''
  };
  return (
    <div className={styles.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className={styles.form__col}>
            <label>Name:</label>
            <Field name="firstName" placeholder="David Miller" />
          </div>
          <div className={styles.form__col}>
            <label>Email:</label>
            <Field name="email" placeholder="davidmiller@gmail.com" />
          </div>
          <div className={styles.form__col}>
            <label>Subject:</label>
            <Field name="subject:" placeholder="your subject" />
          </div>
          <div className={styles.form__col}>
            <label>Phone:</label>
            <Field name="phone" placeholder="+880859545" />
          </div>
          <div className={`${styles.form__col} ${styles.form__colArear}`}>
            <label>Message:</label>
            <Field name="message" placeholder="Hello, do you have time to talk with me?" as="textarea" />
          </div>
          
          <div className={`${styles.form__col} ${styles.form__colSubmit}`}>
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};