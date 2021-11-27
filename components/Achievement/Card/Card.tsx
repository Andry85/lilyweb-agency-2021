import styles from './Card.module.scss'
import Image from 'next/image'



function Card({dataCard}): JSX.Element {
  return (
    <div className={styles.card}>
        {dataCard.map((item) => 
          <div key={item.id} className={styles.card__inner}>  
            <div className={styles.card__inside}>    
              <figure>
                <Image
                    src={item.img}
                    alt=""
                    width={45}
                    height={45}
                    objectFit="contain"
                />
              </figure>
              <h4>{item.count}</h4>
              <p>{item.title}</p>
            </div>
          </div>
        )}
    </div>
  )
}
export default Card