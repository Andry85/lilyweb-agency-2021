import styles from './ContactService.module.scss'
import {FormContactService} from './FormContactService/FormContactService';
import Image from 'next/image'




type сontactServiceProp = {
  сontactServiceData: {
    title: string;
    subtitle: string;
    person: {
      pic: string;
      email: string;
      phone: string;
    } 
  };
}
          

function ContactService({сontactServiceData}: сontactServiceProp): JSX.Element {
  return (
    <div className={styles.сontactService}>
      <div className={styles.сontactService__left}>
        <div className={styles.сontactService__content}>
          <h2>{сontactServiceData.title}</h2>
          <h3>{сontactServiceData.subtitle}</h3>
          <div className={styles.сontactServicePersone}>
            <Image
              src={сontactServiceData.person.pic}
              alt=""
              width={80}
              height={80}
            />
            <div className={styles.сontactServicePersone__email}>
              {сontactServiceData.person.email}
            </div>
            <div className={styles.сontactServicePersone__phone}>
              {сontactServiceData.person.phone}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.сontactService__right}>
        <div className={styles.contactIndex__info}>
          
          <div className={styles.сontactService__form}>
            <FormContactService/>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ContactService