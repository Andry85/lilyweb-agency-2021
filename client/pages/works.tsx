import Head from 'next/head'
import styles from '../styles/Works.module.scss'
import Layout from '../components/layout'
import WorkTabs from '../components/WorkTabs/WorkTabs';



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

export default function Service({data}) {
  return (
    <Layout>
        <Head>
          <title>Our works</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{data.worksPage.header.title}</h2>
            <h3 className="headerBottom__subtitle">{data.worksPage.header.subtitle}</h3>
          </div>  
        </div>    
      
      <div className={styles.worksWrapper}>
        <div className={styles.worksWrapper__body}>
          <h1 className={styles.worksWrapper__title}>{data.worksPage.body.title}</h1>
          <h2 className={styles.worksWrapper__subtitle}>{data.worksPage.body.subtitle}</h2>
        </div>
        <WorkTabs
          categories = {data.worksPage.categories}
        />
      </div>
    </Layout>
  )
}