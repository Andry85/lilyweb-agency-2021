import styles from './Social.module.scss'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { IconName } from '@fortawesome/fontawesome-common-types';
library.add(fab)


type SocialProp = {
  dataItems: {
    id: number;
    url: string;
    icon: IconName;
  }[];
}

   

function Social({dataItems}: SocialProp): JSX.Element {
  return (
    <ul className={styles.social}>
       {dataItems.map((element) => 
          <li key={element.id}>
              <Link href={element.url}>
                <a><FontAwesomeIcon icon={["fab", `${element.icon}`]} /></a>
              </Link>
          </li>
        )}
    </ul>

  )
}
export default Social