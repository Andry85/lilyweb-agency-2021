import styles from './Card.module.scss'
import Image from 'next/image'



function Card({ dataCard }): JSX.Element {
  return (
    <div className={styles.card}>
      {dataCard.map((item) =>
        <div key={item.id} className={styles.card__inner}>
          <div className={styles.card__inside}>
            <figure>
              <Image
                src={item.acf.achievement_pic.url}
                alt=""
                width={45}
                height={45}
                objectFit="contain"
              />
            </figure>
            <h4 dangerouslySetInnerHTML={{ __html: item.content.rendered }}></h4>
            <p dangerouslySetInnerHTML={{ __html: item.title.rendered }}></p>
          </div>
        </div>
      )}
    </div>
  )
}
export default Card