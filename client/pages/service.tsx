import Head from 'next/head'
import styles from '../styles/Sevice.module.scss'
import Layout from '../components/layout'
import GridCatalog from '../components/GridCatalog/GridCatalog';





export async function getStaticProps(context) {
  const res = await fetch('http://localhost:4000/api/data');
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



export default function About({data}) {


  return (
    <Layout>
        <Head>
          <title>Service Page</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{data.servicePage.header.title}</h2>
            <h3 className="headerBottom__subtitle">{data.servicePage.header.subtitle}</h3>
          </div>  
        </div>
     
      
      <div className={styles.servicesCatalog}>
        <GridCatalog dataObg = {data.indexPage.services} />
      </div>

    

    </Layout>
  )
}