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

  

  const paths = resultList.map((post) => ({
    params: { id: post.path },
  }));


  console.log(paths);





  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:5000/api/data/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}


export default function Work({post}) {

  return (
    <Layout>
        <Head>
          <title>Work</title>
        </Head>
          
         
      
    </Layout>
  )
}