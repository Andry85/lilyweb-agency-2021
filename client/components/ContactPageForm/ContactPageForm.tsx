import styles from './ContactPageForm.module.scss'
import {FormContact} from './FormContact/FormContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram  } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'




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
    <div className={styles.contactPageForm}>
      <div className={styles.contactPageFormBody}>
        <h3 className={styles.contactPageFormBody__subtitle}>{contactPageFormData.subtitle}</h3>
        <FormContact/>
      </div>
      <aside className={styles.contactPageFormSidebar}>
        <h2 className={styles.contactPageFormSidebar__title}>{contactPageFormData.title}</h2>
        <ul className={styles.contactPageFormSidebar__list}>
          <li className={styles.contactPageFormSidebar__item}>
            <i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
            <span className={styles.contactPageFormSidebar__name}>ADDRESS:</span>
            <span className={styles.contactPageFormSidebar__body}>{contactPageFormData.adress}</span>
          </li>
          <li className={styles.contactPageFormSidebar__item}>
            <i><FontAwesomeIcon icon={faPhoneAlt} /></i>
            <span className={styles.contactPageFormSidebar__name}>Phone:</span>
            <span className={styles.contactPageFormSidebar__body}>{contactPageFormData.phone}</span>
          </li>
          <li className={styles.contactPageFormSidebar__item}>
            <i><FontAwesomeIcon icon={faEnvelopeOpen} /></i>
            <span className={styles.contactPageFormSidebar__name}>Email:</span>
            <span className={styles.contactPageFormSidebar__body}>{contactPageFormData.email}</span>
          </li>
          <li className={styles.contactPageFormSidebar__item}>
            <i><FontAwesomeIcon icon={faGlobe} /></i>
            <span className={styles.contactPageFormSidebar__name}>WEbsite:</span>
            <span className={styles.contactPageFormSidebar__body}>{contactPageFormData.website}</span>
          </li>
        </ul>
        <ul className={styles.contactPageFormSidebar__social}>
          <li>
            <Link href="/">
              <a><FontAwesomeIcon icon={faFacebookF} /></a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a><FontAwesomeIcon icon={faInstagram} /></a>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}
export default ContactPageForm