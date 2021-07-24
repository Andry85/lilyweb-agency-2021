import Head from 'next/head'
import styles from '../../styles/Work.module.scss'
import Layout from '../../components/layout'


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:5000/api/data')
  const posts = await res.json()

  
  // Get the paths we want to pre-render based on posts
  const resultList = posts.worksPage.categories;


  const innerLink = resultList.map(function (element) {
    return element.works.map(function (el) {
      return el.id.toString();
    });
  })


  const flatLinks = innerLink.flat();

  const paths = flatLinks.map(function (element) {
      return {
        params: { id: element }
      }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:5000/api/data`);
  const jsonObj = await res.json()

  if (!jsonObj) {
    return {
      notFound: true,
    }
  }

  const resultList = jsonObj.worksPage.categories;
  const innerLink = resultList.map(function (element) {
    return element.works;
  });

  const flatLinks = innerLink.flat();
  const works = flatLinks.find(function (element) {
    return element.id == params.id;
  });

  // Pass post data to the page via props
  return { 
    props: { 
      works,
      jsonObj
    } 
  }
}

export default function Work({works,jsonObj}) {

  return (
    <Layout>
        <Head>
          <title>Work</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{jsonObj.worksPageDetail.header.title}</h2>
            <h3 className="headerBottom__subtitle">{jsonObj.worksPageDetail.header.subtitle}</h3>
          </div>  
        </div>
        <div className={styles.workWrapper}>
            <h3 className={styles.workWrapper__cat}>{works.cat}</h3>
            <h2 className={styles.workWrapper__title}>{works.title}</h2>
            <div className={styles.workPreambule}>
              <div className={styles.workPreambule__left}>
                <p className={styles.workPreambule__smallDesc}>{works.smallDesc}</p>
                <p className={styles.workPreambule__longDesc}>{works.longDesc}</p>
              </div>
              <div className={styles.workPreambule__right}>
                <aside>
                  <ul>
                    <li>
                      <h4>Client</h4>
                      <p>{works.client}</p>
                    </li>
                    <li>
                      <h4>Technology</h4>
                      <p>{works.technology}</p>
                    </li>
                    <li>
                      <h4>Created Date</h4>
                      <p>{works.createdDate}</p>
                    </li>
                    <li>
                      <h4>Website</h4>
                      <p>{works.link}</p>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
            <ul className={styles.workImages}>
              {works.images.map((item, index) => (
                  <li key={index}>
                    <img src={item} />
                  </li>
              ))}
            </ul>
            <div className={styles.workPostambule}>
                <h2 className={styles.workPostambule__title}>{works.prew.title}</h2>
                <p className={styles.workPostambule__desc}>{works.prew.desc}</p>
                <div className={styles.workPostambule__content}>
                  <div className={styles.workPostambule__mobile}>
                    <img src={works.prew.mobilePic} />
                  </div>
                  <div className={styles.workPostambule__desktop}>
                  <img src={works.prew.desktopPic} />
                  </div>
                </div>
            </div>
        </div>  
          
          
         
      
    </Layout>
  )
}