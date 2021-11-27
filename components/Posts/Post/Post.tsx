import styles from './Post.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import {month} from './dates'


function Post({dataItem}): JSX.Element {


  return (
      <ul className={styles.post}>
        {dataItem.map((element) => 

          <li key={element.id} className={styles.post__child}>
            <article className={styles.post__inner}>     
              <figure>
                <Image
                    src={element.img}
                    alt=""
                    width={570}
                    height={259}
                    layout="responsive"
                />
                <div className={styles.post__date}>
                  <span className={styles.post__dateDay}>{new Date(element.date).getDate()}</span> 
                  <span className={styles.post__dateMonth}>{month[new Date(element.date).getMonth()]}</span>  
                </div>
              </figure>
              <div className={styles.post__content}>
                <h2>
                    <Link href={element.url}>
                      <a>{element.title}</a>
                    </Link>
                </h2>
                <p>{element.text}</p>
                <div className={styles.post__more}>
                  <Link href={element.url}>
                    <a>Read more</a>
                  </Link>
                </div>
              </div>
            </article>
          </li>
        )}
      </ul> 
  )
}
export default Post