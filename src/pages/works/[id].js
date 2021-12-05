import Head from 'next/head'
import styles from '../../styles/Work.module.scss'
import Layout from '../../components/layout'
import Video from '../../components/Video/Video'
import SocialMediaDark from '../../components/SocialMediaDark/SocialMediaDark'
import Pagination from '../../components/Pagination/Pagination'

import data from '../../pages/api/dataSource.json';


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  // Get the paths we want to pre-render based on posts
  const resultList = data.worksPage.categories;


  const innerLink = resultList.map(function (element) {
    return element.works.map(function (el) {
      return el.id.toString();
    });
  })


  const flatLinks = innerLink.reduce((acc, val) => acc.concat(val), []);

  const paths = flatLinks.map(function (element) {
      return {
        params: { id: element }
      }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const categories = data.worksPage.categories;
  const worksinCategory = categories.map(function (element) {
    return element.works;
  });

  const flatWorksinCategory = worksinCategory.reduce((acc, val) => acc.concat(val), []);
  const resultWork = flatWorksinCategory.find(function (element) {
    return element.id == params.id;
  });
  const nextWork = flatWorksinCategory.find(function (element) {


    
    if (params.id == flatWorksinCategory.length - 1) {
      return element.id == 0;
    } else {
      return element.id == parseInt(params.id) + 1;
    }

  });
  const prevWork = flatWorksinCategory.find(function (element) {

    if (params.id > 0) {
      return element.id == parseInt(params.id) - 1;
    } else {
      return element.id == flatWorksinCategory.length -1;
    }
  });






  // Pass post data to the page via props
  return { 
    props: { 
      resultWork,
      nextWork,
      prevWork
    } 
  }
}

export default function Work({resultWork, nextWork, prevWork}) {

  return (
    <Layout>
        <Head>
          <title>Work</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{data.worksPageDetail.header.title}</h2>
            <h3 className="headerBottom__subtitle">{data.worksPageDetail.header.subtitle}</h3>
          </div>  
        </div>
        <div className={styles.workWrapper}>
            <h3 className={styles.workWrapper__cat}>{resultWork.cat}</h3>
            <h2 className={styles.workWrapper__title}>{resultWork.title}</h2>
            <div className={styles.workPreambule}>
              <div className={styles.workPreambule__left}>
                <p className={styles.workPreambule__smallDesc}>{resultWork.smallDesc}</p>
                <p className={styles.workPreambule__longDesc}>{resultWork.longDesc}</p>
              </div>
              <div className={styles.workPreambule__right}>
                <aside>
                  <ul>
                    <li>
                      <h4>Client</h4>
                      <p>{resultWork.client}</p>
                    </li>
                    <li>
                      <h4>Technology</h4>
                      <p>{resultWork.technology}</p>
                    </li>
                    <li>
                      <h4>Created Date</h4>
                      <p>{resultWork.createdDate}</p>
                    </li>
                    <li>
                      <h4>Website</h4>
                      <p>{resultWork.link}</p>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
            <ul className={styles.workImages}>
              {resultWork.images.map((item, index) => (
                  <li key={index}>
                    <img src={item} />
                  </li>
              ))}
            </ul>
            <div className={styles.workPostambule}>
                <h2 className={styles.workPostambule__title}>{resultWork.prew.title}</h2>
                <p className={styles.workPostambule__desc}>{resultWork.prew.desc}</p>
                <div className={styles.workPostambule__content}>
                  <div className={styles.workPostambule__mobile}>
                    <img src={resultWork.prew.mobilePic} />
                  </div>
                  <div className={styles.workPostambule__desktop}>
                  <img src={resultWork.prew.desktopPic} />
                  </div>
                </div>
            </div>
            <div className={styles.reviewWrapper}>
              <div className={styles.reviewWrapper__pic}>
                <img src={resultWork.testimonial.authorPic} />
              </div>
              <div className={styles.reviewWrapper__text}>
                <blockquote>
                  <span className={styles.reviewWrapper__q}></span>
                  <p>{resultWork.testimonial.text}</p>
                </blockquote>
                <div className={styles.reviewWrapper__author}>{resultWork.testimonial.author}</div>
              </div>
              <div className={styles.reviewWrapper__video}>
              <Video
                  src={resultWork.testimonial.video.src} 
                  type={resultWork.testimonial.video.type} 
                  poster={resultWork.testimonial.video.poster} 
                />
              </div>
            </div>
            <SocialMediaDark/>
            <Pagination prevW = {prevWork} nextW = {nextWork}/>
        </div>  
          
          
         
      
    </Layout>
  )
}