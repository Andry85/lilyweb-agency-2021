import Head from 'next/head'
import styles from '../styles/Works.module.scss'
import Layout from '../components/layout'
import WorkTabs from '../components/WorkTabs/WorkTabs';
import TitleText from '../components/TitleText/TitleText';
import Button from '../components/Button/Button'



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

export default function Works({data}) {
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
      <div className={styles.progect}>
        <div className={styles.progect__body}>
          <div className={styles.progect__col_1}>
            <TitleText
              title={data.worksPage.getStarted.title} 
              text={data.worksPage.getStarted.subtitle}
              titleColor = "#fff"
              titleFontSize = "4rem"
              wrapperPaddings = "40px 0 75px 0"
              wrapperMobilePaddings = "0px 0px 0px 0px"
              wrapperMaxWidth = "auto"
              wrapperMargings = "0"
              wrapperMobileMargings = "0px 0 0px 0"
              titlePaddings = "0 0 24px 0"
              titleTextAlign = "left"
              textTextAlign = "left"
              textTextTransform = "none"
              textColor = "#d1d1d1"
            />
          </div>
          <div className={styles.progect__col_2}>
            <Button 
                href="/" 
                title="Get Started Now" 
                color = "#000" 
                background = "#fff" 
                border = "none"
                borderRadius = "30px"
                textTransform = "none"
                colorHover = "#fff"
                backgroundHover = "#512cbe"
                paddings = "14px 20px"
                margings = "0"
                mobilePaddings = "5px"
                mobileMargings = "0 auto"
                width = "100%"
                fontWeight = "bold"
                widthMobile = "250px"
              />
            </div>
        </div>
      </div>
    </Layout>
  )
}