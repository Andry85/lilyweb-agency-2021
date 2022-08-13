import styles from './AboutList.module.scss'
import Image from 'next/image'




type AboutListProp = {
  obj: {
    id: number;
    acf: {
      pic: {
        url: string;
      }
    };
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
  }[];
}


function AboutList({ obj }: AboutListProp): JSX.Element {
  return (
    <div className={styles.aboutList}>
      <ul className={styles.aboutList__inner}>
        {obj.map((item) =>
          <li key={item.id} className={styles.aboutList__item}>
            <figure>
              <Image
                src={item.acf.pic.url}
                alt=""
                width={250}
                height={250}
                objectFit="contain"
              />
            </figure>
            <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h3>
            <div className={styles.aboutList__content}>
              <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
export default AboutList