import Head from 'next/head'
import styles from '../styles/Sevice.module.scss'
import Layout from '../components/layout'
import GridCatalog from '../components/GridCatalog/GridCatalog';
import ContactService from '../components/ContactService/ContactService';

import data from '../pages/api/dataSource.json';

export default function Service() {
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
      <div className={styles.contactServiceWrapper}>
        <div className={styles.contactServiceWrapper__inner}>
          <ContactService сontactServiceData = {data.servicePage.serviceData}/>
        </div>
      </div>
    </Layout>
  )
}