import styles from './Partners.module.scss'
import Image from 'next/image'



type PartnersProp = {
  title: string,
  subtitle: string,
  images: Array<object>,
}


function Partners({ title, subtitle, images }: PartnersProp): JSX.Element {
  return (
    <div className={styles.partners}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <ul className={styles.partnersList}>
        {images.map((item) =>
          <li>
            <Image
              src={item.url}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </li>
        )}
      </ul>
    </div>
  )
}
export default Partners