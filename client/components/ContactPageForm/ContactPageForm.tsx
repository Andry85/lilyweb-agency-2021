import styles from './ContactPageForm.module.scss'
import {FormContact} from './FormContact/FormContact';





type ContactPageFormProp = {
  contactPageFormData: {
    title: string;
    subtitle: string;
    adress: string;
    phone: string;
    email: string;
    website: string;
  };
}
      

function ContactPageForm({contactPageFormData}: ContactPageFormProp): JSX.Element {
  return (
    <div className={styles.contactPageFormProp}>
      <h2>{contactPageFormData.title}</h2>
      <FormContact/>
    </div>
  )
}
export default ContactPageForm