import Head from 'next/head'
import styles from '../styles/Contact.module.scss'
import Layout from '../components/layout'
import TitleText from '../components/TitleText/TitleText';
import ContactPageForm from '../components/ContactPageForm/ContactPageForm';
import SimpleMap from '../components/SimpleMap/SimpleMap';





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



export default function About({data}) {


  return (
    <Layout>
        <Head>
          <title>Contact Page</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{data.contantPage.header.title}</h2>
            <h3 className="headerBottom__subtitle">{data.contantPage.header.subtitle}</h3>
          </div>  
        </div>
     
        <div className={styles.contactPage}>
          <div className="container">
            <TitleText
              titleColor="#131418"
              title={data.contantPage.offer.title} 
              text={data.contantPage.offer.text}
              wrapperPaddings = "40px 10px 75px 10px"
              wrapperMobilePaddings = "10px 10px 50px 10px"
              wrapperMaxWidth = "770px"
              wrapperMargings = "0 auto"
              wrapperMobileMargings = "10px 0 10px 0"
              titlePaddings = "0 0 14px 0"
              textTextTransform = "none"
              textFontSize = "1.7rem"
              textLineHeight = "2.0"
              titleFontSize = "5rem"
            />
            <ContactPageForm contactPageFormData = {data.contantPage.form} />

            <div className={styles.contactPage__map}>
              <TitleText
                titleColor="#131418"
                title={data.contantPage.map.title} 
                text={data.contantPage.map.text}
                wrapperPaddings = "100px 10px 75px 10px"
                wrapperMobilePaddings = "10px 10px 50px 10px"
                wrapperMaxWidth = "770px"
                wrapperMargings = "0 auto"
                wrapperMobileMargings = "10px 0 10px 0"
                titlePaddings = "0 0 14px 0"
                textTextTransform = "none"
                textFontSize = "1.7rem"
                textLineHeight = "2.0"
                titleFontSize = "5rem"
              />
              <SimpleMap/>
            </div>
              
          </div>
      </div>



    </Layout>
  )
}