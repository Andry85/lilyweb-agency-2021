import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'
import HeaderLogo from '../components/HeaderLogo/HeaderLogo'
import HeaderBurger from '../components/HeaderBurger/HeaderBurger'
import MainMenu from '../components/MainMenu/MainMenu';
import Button from '../components/Button/Button';




const fetcher = url => axios.get(url).then(res => res.data)



export default function Layout({ children, home}) {

  const {data, error } = useSWR('/api/data', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  let logo = data.header.logo as string;
  let title = data.header.title as string;


  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta name="og:title" />
      </Head>
        {home ? (
          <>
            <header className={[styles.header, styles.headerHome].join(' ')}>
              <div className={styles.container}>
                <div className={styles.header__top}>
                  <HeaderLogo name = {logo} ishome = {true} />
                  <MainMenu ishome = {true} />
                  <HeaderBurger ishome = {true} />
                </div>
                <div className={styles.header__middle}>
                  <h1 className={styles.header__titleHome}>{title}</h1>
                  <Button 
                    href="/contact" 
                    title="Contact now" 
                    color = "blue" 
                    background = "yellow" 
                    border = "1px solid red"
                    borderRadius = "10px"
                    textTransform = "uppercase"
                    colorHover = "yellow"
                    backgroundHover = "yellow"
                  />
                </div>
              </div>
            </header>
          </>
        ) : (
          <>
            <h2>
              Inner page
            </h2>
          </>
        )}
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