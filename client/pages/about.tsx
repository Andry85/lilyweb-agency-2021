import Head from 'next/head'
import styles from '../styles/About.module.scss'
import Layout from '../components/layout'
import Button from '../components/Button/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt, faUserFriends, faEye} from '@fortawesome/free-solid-svg-icons'
import TitleText from '../components/TitleText/TitleText';
import Offer from '../components/Offer/Offer';





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
          <title>About Page</title>
        </Head>
        <div className="headerBottom">
          <div className="container__inner">
            <h2 className="headerBottom__title">{data.aboutUsPage.header.title}</h2>
            <h3 className="headerBottom__subtitle">{data.aboutUsPage.header.subtitle}</h3>
          </div>  
        </div>
     
        <div className={styles.offer}>
          <div className="container">
            <TitleText
              title={data.aboutUsPage.offer.title} 
              text={data.aboutUsPage.offer.text}
              wrapperPaddings = "40px 10px 40px 10px"
              wrapperMobilePaddings = "10px 10px 10px 10px"
              wrapperMaxWidth = "770px"
              wrapperMargings = "0 auto"
              wrapperMobileMargings = "10px 0 10px 0"
              titlePaddings = "0 0 34px 0"
            />
            <Offer
               src={data.indexPage.video.src} 
               type={data.indexPage.video.type} 
               poster={data.indexPage.video.poster} 
               offerList = {data.aboutUsPage.offerList}
            />
          </div>
      </div>
    </Layout>
  )
}