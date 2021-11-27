import React, { useState } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
  searchText: string;
}


          

function Search(): JSX.Element {

  const initialValues: MyFormValues = { 
    searchText: ''
  };

  const [isActiveHolder, setisActiveHolder] = useState(false);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchWrapper__icon} onClick={() => setisActiveHolder(!isActiveHolder)}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      {isActiveHolder &&
        <div className={styles.searchWrapper__holder}>
          <div className={styles.searchWrapper__form}>
              <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  console.log({ values, actions });
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                  setisActiveHolder(!isActiveHolder);
                }}
              >
                <Form>
                  <Field name="searchText" placeholder="Enter a world" />
                  <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </Form>
              </Formik>
            </div>
            <div className={styles.searchWrapper__close} onClick={() => setisActiveHolder(!isActiveHolder)}>
              <FontAwesomeIcon icon={faTimes} />
            </div> 
        </div>
      }
    </div>
  )
}
export default Search