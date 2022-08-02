import styles from './ContactIndex.module.scss'
import { FormContact } from './FormContact/FormContact';
import Image from 'next/image';





type ContactIndexProp = {
  formData: string
  contactIndexData: {
    title: string;
    text: string;
    subtitle: string;
  };
  contactsList: {
    label: string;
    pic: string;
  }[];
}


function ContactIndex({ contactIndexData, contactsList, formData }: ContactIndexProp): JSX.Element {
  return (
    <div className={styles.contactIndex}>
      <div className={styles.contactIndex__left}>
        <div className={styles.contactIndex__overlay}></div>
        <div className={styles.contactIndex__form}>
          {/* <div dangerouslySetInnerHTML={{ __html: formData }}></div> */}
          <FormContact />
        </div>
      </div>
      <div className={styles.contactIndex__right}>
        <div className={styles.contactIndex__info}>
          <h2>{contactIndexData.title}</h2>
          <p>{contactIndexData.text}</p>
          <h3>{contactIndexData.subtitle}</h3>
          <ul className={styles.contactsList}>
            {contactsList.map((item, index) =>
              <li key={index} className={styles.contactsList__item}>
                <div className={styles.contactsList__pic}>
                  <Image
                    src={item.pic}
                    alt=""
                    width={15}
                    height={15}
                    objectFit="contain"
                  />
                </div>
                <p>{item.label}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ContactIndex