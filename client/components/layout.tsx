import { GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'
import HeaderLogo from '../components/HeaderLogo/HeaderLogo'

const fetcher = url => axios.get(url).then(res => res.data)



export default function Layout({ children, home}) {

  const { data, error } = useSWR('/api/data', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta name="og:title" />
      </Head>
      <header className={styles.header}>
        <HeaderLogo name = {data.header.logo} color= {data.header.logoHome} />
        {home ? (
          <>
            <h1>index page</h1>
          </>
        ) : (
          <>
            <h2>
              Inner page
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}