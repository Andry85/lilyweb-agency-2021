import Head from 'next/head'
import styles from '../styles/About.module.scss'
import Layout from '../components/layout'
import Button from '../components/Button/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt, faUserFriends, faEye} from '@fortawesome/free-solid-svg-icons'





export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/data');
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
      <div className="container">

      </div>
    </Layout>
  )
}