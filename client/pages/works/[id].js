import Head from 'next/head'
import styles from '../../styles/Work.module.scss'
import Layout from '../../components/layout'
import Video from '../../components/Video/Video'
import SocialMediaDark from '../../components/SocialMediaDark/SocialMediaDark'
import { getWork, getSlugs } from '../../utils/wordpress';


// This function gets called at build time
export async function getStaticPaths() {

  const paths = await getSlugs('works');

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: 'blocking'
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const work = await getWork(params.id);


  // Pass post data to the page via props
  return {
    props: {
      work
    },
    revalidate: 10,
  }
}

export default function Work({ work }) {

  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <div className="headerBottom">
        <div className="container__inner">
          <h2 className="headerBottom__title" dangerouslySetInnerHTML={{ __html: work.title.rendered }}></h2>
          <h3 className="headerBottom__subtitle">{work.acf.description}</h3>
        </div>
      </div>
      <div className={styles.workWrapper}>
        <h3 className={styles.workWrapper__cat}>{work.acf.categorie}</h3>
        <h2 className={styles.workWrapper__title}>{work.acf.title}</h2>
        <div className={styles.workPreambule}>
          <div className={styles.workPreambule__left}>
            <p className={styles.workPreambule__smallDesc}>{work.acf.smalldesc}</p>
            <p className={styles.workPreambule__longDesc}>{work.acf.longdesc}</p>
          </div>
          <div className={styles.workPreambule__right}>
            <aside>
              <ul>
                <li>
                  <h4>Client</h4>
                  <p>{work.acf.client}</p>
                </li>
                <li>
                  <h4>Technology</h4>
                  <p>{work.acf.technology}</p>
                </li>
                <li>
                  <h4>Created Date</h4>
                  <p>{work.acf.date}</p>
                </li>
                <li>
                  <h4>Website</h4>
                  <p>{work.acf.url}</p>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <ul className={styles.workImages}>
          {[work.acf.images_1.url,
          work.acf.images_2.url,
          work.acf.images_3.url,
          work.acf.images_4.url
          ].map((item, index) => (
            <li key={index}>
              <img src={item} />
            </li>
          ))}
        </ul>
        <div className={styles.workPostambule}>
          <h2 className={styles.workPostambule__title}>{work.acf.prew_title}</h2>
          <p className={styles.workPostambule__desc}>{work.acf.prew_desc}</p>
          <div className={styles.workPostambule__content}>
            <div className={styles.workPostambule__mobile}>
              <img src={work.acf.prew_mobilepic.url} />
            </div>
            <div className={styles.workPostambule__desktop}>
              <img src={work.acf.prew_desktoppic.url} />
            </div>
          </div>
        </div>
        <div className={styles.reviewWrapper}>
          <div className={styles.reviewWrapper__pic}>
            <img src={work.acf.testimonial_authorpic.url} />
          </div>
          <div className={styles.reviewWrapper__text}>
            <blockquote>
              <span className={styles.reviewWrapper__q}></span>
              <p>{work.acf.testimonial_text}</p>
            </blockquote>
            <div className={styles.reviewWrapper__author}>{work.acf.testimonial_author}</div>
          </div>
          <div className={styles.reviewWrapper__video}>
            <Video
              src={work.acf.testimonial_video_url.url}
              type={work.acf.testimonial_video_type}
              poster={work.acf.testimonial_video_poster.url}
            />
          </div>
        </div>
        <SocialMediaDark />
      </div>
    </Layout>
  )
}