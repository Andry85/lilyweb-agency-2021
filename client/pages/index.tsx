import Head from 'next/head'
import styles from '../styles/Index.module.scss'
import Layout from '../components/layout'




export default function Index() {


  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Index Page</title>
        </Head>
        <div className={styles.main}>
          
        </div>
      </div>
    </Layout>
  )
}