import Head from 'next/head'
import styles from '../styles/Sevice.module.scss'
import Layout from '../components/layout'
import GridCatalog from '../components/GridCatalog/GridCatalog';
import ContactService from '../components/ContactService/ContactService';
import { getPage, getServices } from '../utils/wordpress';


export async function getStaticProps(context) {

  const page = await getPage(195);
  const services = await getServices();

  if (!page || !services) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page,
      services,
    }, // will be passed to the page component as props
  }
}

export default function Service({ page, services }) {
  return (
    <Layout>
      <Head>
        <title>{page.acf.title_page}</title>
      </Head>
      <div className="headerBottom">
        <div className="container__inner">
          <h2 className="headerBottom__title">{page.acf.title_page}</h2>
          <h3 className="headerBottom__subtitle">{page.acf.subtitle_page}</h3>
        </div>
      </div>
      <div className={styles.servicesCatalog}>
        <GridCatalog services={services} />
      </div>
      <div className={styles.contactServiceWrapper}>
        <div className={styles.contactServiceWrapper__inner}>
          <ContactService сontactServiceData={{
            title: page.acf.title_form,
            subtitle: page.acf.subtitle_form,
            person: {
              pic: page.acf.persone_pic.url,
              email: page.acf.persone_email,
              phone: page.acf.persone_phone,
            }
          }} />
        </div>
      </div>
    </Layout>
  )
}