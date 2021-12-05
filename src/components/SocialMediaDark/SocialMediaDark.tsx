import styles from './SocialMediaDark.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faInstagram  } from '@fortawesome/free-brands-svg-icons'



          

function SocialMediaDark(): JSX.Element {
  return (
    <div className={styles.SocialMediaDark}>
      <h3>Share Project</h3>
      <ul>
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
    </div>
  )
}
export default SocialMediaDark