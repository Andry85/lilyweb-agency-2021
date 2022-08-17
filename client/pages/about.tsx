import Head from 'next/head'
import styles from '../styles/About.module.scss'
import Layout from '../components/layout'
import TitleText from '../components/TitleText/TitleText';
import Offer from '../components/Offer/Offer';
import AboutList from '../components/AboutList/AboutList';
import AboutSlider from '../components/AboutSlider/AboutSlider';
import Partners from '../components/Partners/Partners';
import { getPage, getBrands, getProcesses, getReviews } from '../utils/wordpress';





export async function getStaticProps(context) {
  const res = await fetch('http://localhost:5000/api/data');
  const data = await res.json()

  const page = await getPage(101);
  const brands = await getBrands();
  const processes = await getProcesses();
  const reviews = await getReviews();

  if (!data || !page || !brands || !processes || !reviews) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      brands,
      page,
      processes,
      reviews
    }, // will be passed to the page component as props
  }
}



export default function About({ data, brands, page, processes, reviews }) {



  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="headerBottom">
        <div className="container__inner">
          <h2 className="headerBottom__title">{page.acf.page_title}</h2>
          <h3 className="headerBottom__subtitle">{page.acf.page_subtitle}</h3>
        </div>
      </div>

      <div className={styles.offer}>
        <div className="container">
          <TitleText
            title={page.acf.servise_title}
            text={page.acf.servise_subtitle}
            wrapperPaddings="40px 10px 75px 10px"
            wrapperMobilePaddings="10px 10px 50px 10px"
            wrapperMaxWidth="770px"
            wrapperMargings="0 auto"
            wrapperMobileMargings="10px 0 10px 0"
            titlePaddings="0 0 34px 0"
          />
          <Offer
            src={page.acf.video_file.url}
            type={page.acf.video_type}
            poster={page.acf.video_image.url}
            offerList={[
              {
                title: page.acf.servise_bloc_first_title,
                text: page.acf.servise_bloc_first_subtitle,
                icon: page.acf.servise_bloc_first_pic.url,
              },
              {
                title: page.acf.servise_bloc_second_title,
                text: page.acf.servise_bloc_second_subtitle,
                icon: page.acf.servise_bloc_second_pic.url,
              },
              {
                title: page.acf.servise_bloc_third_title,
                text: page.acf.servise_bloc_third_subtitle,
                icon: page.acf.servise_bloc_third_pic.url,
              }
            ]}
          />
        </div>
      </div>

      <div className="container__inner">
        <TitleText
          title={page.acf.process_title}
          text={page.acf.process_subrirtle}
          titleTextAlign="left"
          textTextAlign="left"
          titleFontSize="5rem"
          wrapperPaddings="40px 10px 75px 10px"
          wrapperMobilePaddings="10px 10px 50px 10px"
          wrapperMaxWidth="700px"
          wrapperMargings="0"
          wrapperMobileMargings="10px 0 10px 0"
          titlePaddings="79px 0 19px 0"
          textTextTransform="none"
          textLineHeight="1.5"
        />
        <AboutList obj={processes} />
      </div>

      <div className={styles.aboutSlider}>
        <div className="container__inner">
          <AboutSlider dataSlider={reviews} testemonials={{
            title: page.acf.response_title,
            subtitle: page.acf.response_subtitle,
          }} />
        </div>
      </div>

      <Partners
        title={page.acf.partners_title}
        subtitle={page.acf.partners_description}
        images={brands}
      />

    </Layout>
  )
}