import styles from './Item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab)

type ItemProps = {
  dataItem: {
    id: number;
    img: string;
    title: string;
    position: string;
    phone: string;
    socials: {
      id: number;
      icon: string;
      url: string; 
    }[];
  }[];
};



function Item({dataItem}: ItemProps): JSX.Element {

  return (
      <ul className={styles.item}>
        {dataItem.map((element) => 
          <li key={element.id} className={styles.item__child}>
            <div className={styles.item__inner}>     
              <figure>
                <Image
                    src={element.img}
                    alt=""
                    width={150}
                    height={150}
                    objectFit="contain"
                />
              </figure>
              <h4>{element.title}</h4>
              <h3>{element.position}</h3>
              <p>{element.phone}</p>
              <ul className={styles.socials}>
                {element.socials.map((el) =>
                
                  <li key={el.id}>
                      <Link href={el.url}>
                        <a><FontAwesomeIcon icon={["fab", `${el.icon}`]} /></a>
                      </Link>
                  </li>
                )} 
              </ul>
            </div>
          </li>
        )}
      </ul> 
  )
}
export default Item