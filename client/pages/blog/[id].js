import Head from 'next/head'
import styles from '../../styles/Blog.module.scss'
import Layout from '../../components/layout'
import BlogSlider from '../../components/BlogSlider/BlogSlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';



// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:5000/api/data')
  const posts = await res.json()

  
  // Get the paths we want to pre-render based on posts
  const resultList = posts.blogPage.blogList;
  const innerLink = resultList.map(function (element) {
      return element.id.toString();
  })

  const paths = innerLink.map(function (element) {
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

  const resultList = jsonObj.blogPage.blogList;


  const resultBlog = resultList.find(function (element) {
    return element.id == params.id;
  });
 
  





  // Pass post data to the page via props
  return { 
    props: { 
      resultBlog,
      jsonObj,
    } 
  }
}

export default function Work({resultBlog,jsonObj}) {

  return (
    <Layout>
        <Head>
          <title>Post</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{jsonObj.blogPage.header.title}</h2>
            <h3 className="headerBottom__subtitle">{jsonObj.blogPage.header.subtitle}</h3>
          </div>  
        </div>

        <div className={styles.blogDeatilPage}>
          <BlogSlider dataSlider = {resultBlog.details.gallery} />
          <h1 className={styles.blogDeatilPage__title}>{resultBlog.details.title}</h1>
          <p className={styles.blogDeatilPage__text}>{resultBlog.details.text}</p>

          {resultBlog.details.cite && 
            <blockquote className={styles.blogDeatilPage__cite}>
              <p className={styles.blogDeatilPage__citeText}>
                <span className={styles.blogDeatilPage__citeIcon}>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                {resultBlog.details.cite.text}
                </p>
              <p className={styles.blogDeatilPage__citeAuth}>{resultBlog.details.cite.auth}</p>
            </blockquote>
          }
          
          <p className={styles.blogDeatilPage__postText}>{resultBlog.details.postText}</p>
          <div className={styles.blogDeatilPage__info}>
            <div  className={styles.blogDeatilPage__auth}>
              <p>{resultBlog.author.name}</p>
              <span>|</span>
              <p>{resultBlog.date}</p>
            </div>
            <div class="addthis_sharing_toolbox"></div>
          </div>
        </div>

   
    </Layout>
  )
}