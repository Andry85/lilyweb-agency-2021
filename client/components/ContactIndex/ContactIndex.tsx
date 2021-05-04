import styles from './ContactIndex.module.scss'
import {FormContact} from './FormContact/FormContact';
import Image from 'next/image'




type ContactIndexProp = {
  contactIndexData: {
    title: string;
    text: string;
    subtitle: string;
  };
  contactsList: {
    id: number;
    icon: string;
    text: string;
  }[];
}
          

function ContactIndex({contactIndexData, contactsList}: ContactIndexProp): JSX.Element {
  return (
    <div className={styles.contactIndex}>
      <div className={styles.contactIndex__left}>
        <div className={styles.contactIndex__overlay}></div>
        <div className={styles.contactIndex__form}>
          <FormContact/>
        </div>
      </div>
      <div className={styles.contactIndex__right}>
        <div className={styles.contactIndex__info}>
          <h2>{contactIndexData.title}</h2>
          <p>{contactIndexData.text}</p>
          <h3>{contactIndexData.subtitle}</h3>
          <ul className={styles.contactsList}>
            {contactsList.map((item) => 
              <li key={item.id} className={styles.contactsList__item}>     
                  <div className={styles.contactsList__pic}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={15}
                        height={15}
                        objectFit="contain"
                    />
                  </div>
                  <p>{item.text}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ContactIndex