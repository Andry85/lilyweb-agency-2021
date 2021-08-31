import Head from 'next/head'
import styles from '../styles/Blogs.module.scss'
import Layout from '../components/layout'
import Link from 'next/link'
import PaginationBlog from '../components/PaginationBlog/PaginationBlog'




export async function getStaticProps(context) {
  const res = await fetch('http://localhost:5000/api/data');
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}

export default function Blogs({data}) {
  return (
    <Layout>
        <Head>
          <title>Blog post</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{data.blogPage.header.title}</h2>
            <h3 className="headerBottom__subtitle">{data.blogPage.header.subtitle}</h3>
          </div>  
        </div>    
      
        <div className={styles.blogsWrapper}>
          <div className={styles.blogsWrapper__container}>
            <ul className={styles.blogsList}>
              {data.blogPage.blogList.map((item) => 
                  <li key={item.id} className={styles.blogsList__item}>     
                      <figure className={styles.blogsList__pic}>
                        <div className={styles.blogsList__img}>
                          <img src={item.pic} />
                          <span className={styles.blogsList__date}>{item.date}</span>
                        </div> 
                        <figcaption>{item.title}</figcaption>
                      </figure>
                      <p className={styles.blogsList__text}>{item.text}</p>
                      <footer className={styles.blogsList__footer}>
                        <div className={styles.blogsList__author}>
                          <img src={item.author.avatar} />
                          <span>{item.author.name}</span>
                        </div>
                        <div className={styles.blogsList__link}>
                          <Link href={item.path}>
                            <a>Read More</a>
                          </Link>
                        </div>
                      </footer>
                  </li>
              )}
            </ul>
            <PaginationBlog/>
          </div>
        </div>

    </Layout>
  )
}