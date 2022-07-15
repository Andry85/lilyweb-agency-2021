import styles from './Item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { IconName } from '@fortawesome/fontawesome-svg-core';
library.add(fab)

type ItemProps = {
  dataItem: {
    id: number;
    title: {
      rendered: string;
    };
    position: string;
    phone: string;
  }[];
};



function Item({ dataItem }: ItemProps): JSX.Element {

  return (
    <ul className={styles.item}>
      {dataItem.map((element) =>
        <li key={element.id} className={styles.item__child}>
          <div className={styles.item__inner}>
            <figure>
              <Image
                src={element.acf.pic.url}
                alt=""
                width={150}
                height={150}
                objectFit="contain"
              />
            </figure>
            <h4 dangerouslySetInnerHTML={{ __html: element.title.rendered }}></h4>
            <h3>{element.acf.position}</h3>
            <p>{element.acf.phone}</p>
          </div>
        </li>
      )}
    </ul>
  )
}
export default Item