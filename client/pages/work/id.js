import Head from 'next/head'
import styles from '../../styles/Work.module.scss'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'





// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:5000/api/data')
  const posts = await res.json()

  
  // Get the paths we want to pre-render based on posts
  const resultList = posts.worksPage.categories;


  const innerLink = resultList.map(function (element) {
    return element.works.map(function (el) {
      return el.innerLink;
    });
  })


  const flatLinks = innerLink.flat();

  const paths = flatLinks.map(function (element) {
      return {
        params: { id: element }
      }
  })

  console.log(paths);





  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:5000/api/data`);
  const jsonObj = await res.json()

  const resultList = jsonObj.worksPage.categories;

  console.log(resultList);



  const innerLink = resultList.map(function (element) {
    return element.works;
  })




  const work = innerLink.find(function (element) {
    return element.innerLink == params.id;
  })

 
  // Pass post data to the page via props
  return { props: { work } }
}


export default function Work({work}) {


  return (
    <Layout>
        <Head>
          <title>Work</title>
        </Head>
          
         
      
    </Layout>
  )
}