import styles from './Partners.module.scss'
import Image from 'next/image'



type PartnersProp = {
  title: string,
  subtitle: string
}
          

function Partners({title, subtitle}: PartnersProp): JSX.Element {
  return (
    <div className={styles.partners}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <ul className={styles.partnersList}>
          <li>
            <Image
              src="/images/partners/01.png"
              alt=""
              width={272}
              height={103}
            />
          </li>
          <li>
            <Image
              src="/images/partners/02.png"
              alt=""
              width={272}
              height={103}
            />
          </li>
          <li>
            <Image
              src="/images/partners/03.png"
              alt=""
              width={272}
              height={103}
            />
          </li>
          <li>
            <Image
              src="/images/partners/04.png"
              alt=""
              width={272}
              height={103}
            />
          </li>
        </ul>
    </div>
  )
}
export default Partners