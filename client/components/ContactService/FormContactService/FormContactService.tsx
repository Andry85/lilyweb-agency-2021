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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

interface MyFormValues {
  firstName: string;
  phoneNamber: string;
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
          <div className={styles.formService__row}>
            <Field name="firstName" placeholder="Enter Full Name" />
          </div>
          <div className={styles.formService__row}>
            <Field name="email" placeholder="Enter email address" />
          </div>
          <div className={styles.formService__row}>
            <Field name="phoneNamber" placeholder="Enter phone number" />
          </div>
          <div className={styles.formService__row}>
            <div className={styles.formService__select}>
              <Field name="help" as="select">
                <option value="">How can we help?</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>
          </div>
          <div className={styles.formService__row}>
            <button type="submit">
              Request Callback
              <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};