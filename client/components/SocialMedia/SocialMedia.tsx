import styles from './SocialMedia.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faInstagram  } from '@fortawesome/free-brands-svg-icons'



          

function SocialMedia(): JSX.Element {
  return (
    <ul className={styles.socialMedia}>
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
  )
}
export default SocialMedia