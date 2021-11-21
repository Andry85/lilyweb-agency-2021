import styles from './AboutList.module.scss'
import Image from 'next/image'




type AboutListProp = {
  obj: {
    id: number;
    title: string;
    img: string;
    list: Array<string>;
  }[];
}
          

function AboutList({obj}: AboutListProp): JSX.Element {
  return (
    <div className={styles.aboutList}>
      <ul className={styles.aboutList__inner}>
        {obj.map((item) => 
          <li key={item.id} className={styles.aboutList__item}>
            <figure>
                <Image
                    src={item.img}
                    alt=""
                    width={250}
                    height={250}
                    objectFit="contain"
                />
            </figure>
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((i, index) =>  
                <li key={index}>{i}</li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}
export default AboutList