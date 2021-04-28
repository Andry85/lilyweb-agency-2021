import styles from './Item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab} from '@fortawesome/free-brands-svg-icons'
library.add(fab)



function Item({dataItem}): JSX.Element {

  return (
    <li className={styles.item}>
        {dataItem.map((element) => 
          <div key={element.id} className={styles.item__inner}>  
            <div className={styles.card__inside}>    
              <figure>
                <Image
                    src={element.img}
                    alt=""
                    width={45}
                    height={45}
                    objectFit="contain"
                />
              </figure>
              <h4>{element.title}</h4>
              <h3>{element.position}</h3>
              <p>{element.phone}</p>
              <ul>
              {element.socials.map((el) =>
              
                <li key={el.id}>
                    <Link href={el.url}>
                      <a><FontAwesomeIcon icon={["fab", `${el.icon}`]} /></a>
                    </Link>
                </li>
              )} 
              </ul>
            </div>
          </div>
        )}
    </li>
  )
}
export default Item