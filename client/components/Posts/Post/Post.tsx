import styles from './Post.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { month } from './dates'


function Post({ dataItem }): JSX.Element {


  return (
    <ul className={styles.post}>
      {dataItem.map((element) =>

        <li key={element.id} className={styles.post__child}>
          <article className={styles.post__inner}>
            <figure>
              <Image
                src={element.acf.pic.url}
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
                <Link href={`/posts/${element.slug}`}>
                  <a dangerouslySetInnerHTML={{ __html: element.title.rendered }}></a>
                </Link>
              </h2>
              <p dangerouslySetInnerHTML={{ __html: element.excerpt.rendered }}></p>
              <div className={styles.post__more}>
                <Link href={`/posts/${element.slug}`}>
                  <a>Читати далі</a>
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