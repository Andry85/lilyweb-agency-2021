import styles from './Partners.module.scss'
import Image from 'next/image'



type PartnersProp = {
  title: string,
  subtitle: string,
  images: {
    acf: {
      image: {
        url: string,
        title: string,
        width: number,
        height: number,
      }
    }
  }[],
}


function Partners({ title, subtitle, images }: PartnersProp): JSX.Element {
  return (
    <div className={styles.partners}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <ul className={styles.partnersList}>
        {images.map((item, index) =>
          <li key={index}>
            <Image
              src={item.acf.image.url}
              alt={item.acf.image.title}
              width={item.acf.image.width}
              height={item.acf.image.height}
            />
          </li>
        )}
      </ul>
    </div>
  )
}
export default Partners