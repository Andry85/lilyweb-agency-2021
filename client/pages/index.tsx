import Head from 'next/head'
import styles from '../styles/Index.module.scss'
import Layout from '../components/layout'
import Button from '../components/Button/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt, faUserFriends, faEye} from '@fortawesome/free-solid-svg-icons'
import Partners from '../components/Partners/Partners';


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




export default function Index({data}) {


  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Index Page</title>
        </Head>
        <div className={styles.preambule}>
          <div className={styles.preambule__left}>
            <h2>{data.indexPage.preambule.title}</h2>
            <p>{data.indexPage.preambule.text}</p>
            <Button 
                href="/about" 
                title="More about us" 
                color = "#fff" 
                background = "#2341dd" 
                border = "2px solid #2341dd"
                borderRadius = "0px"
                textTransform = "uppercase"
                colorHover = "#2341dd"
                backgroundHover = "#fff"
                paddings = "10px 20px"
                margings = "10px 0"
                mobilePaddings = "5px"
                mobileMargings = "0 auto"
              />
          </div>
          <div className={styles.preambule__right}>
            <ul className={styles.aboutList}>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faMicrophoneAlt} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="/">
                      <a>{data.indexPage.preambule.about[0].title}</a>
                    </Link>
                  </h2>
                  <p>{data.indexPage.preambule.about[0].text}</p>
                </article>
              </li>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faUserFriends} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="/">
                      <a>{data.indexPage.preambule.about[1].title}</a>
                    </Link>
                  </h2>
                  <p>{data.indexPage.preambule.about[1].text}</p>
                </article>
              </li>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faEye} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="/">
                      <a>{data.indexPage.preambule.about[2].title}</a>
                    </Link>
                  </h2>
                  <p>{data.indexPage.preambule.about[2].text}</p>
                </article>
              </li>
            </ul>
          </div>
        </div>
        <Partners title={data.indexPage.partners.title} subtitle={data.indexPage.partners.subtitle} />
      </div>
    </Layout>
  )
}