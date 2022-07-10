import Head from 'next/head'
import styles from '../styles/Index.module.scss'
import Layout from '../components/layout'
import Button from '../components/Button/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt, faUserFriends, faEye } from '@fortawesome/free-solid-svg-icons'
import Partners from '../components/Partners/Partners';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import IndexSlider from '../components/IndexSlider/IndexSlider';
import GridCatalog from '../components/GridCatalog/GridCatalog';
import Achievement from '../components/Achievement/Achievement';
import Video from '../components/Video/Video';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import Posts from '../components/Posts/Posts';
import ContactIndex from '../components/ContactIndex/ContactIndex';
import { getPage, getServices } from '../utils/wordpress';





export async function getStaticProps(context) {

  const res = await fetch('http://localhost:5000/api/data');
  const data = await res.json()

  const page = await getPage(13);
  const services = await getServices();






  if (!data || !page || !services) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      page,
      services
    }, // will be passed to the page component as props
    revalidate: 10, // In seconds
  }
}




export default function Index({ data, page, services }) {

  console.log(services);

  return (

    <Layout home>
      <div className="container">
        <Head>
          <title>Index Page</title>
        </Head>
        <div className={styles.preambule}>
          <div className={styles.preambule__left}>
            <h2>{page.acf.preambule_title}</h2>
            <p>{page.acf.preambule_text}</p>
            <Button
              href="/about"
              title={page.acf.preambule_link_more_text}
              color="#fff"
              background="#2341dd"
              border="2px solid #2341dd"
              borderRadius="0px"
              textTransform="uppercase"
              colorHover="#2341dd"
              backgroundHover="#fff"
              paddings="10px 20px"
              margings="10px 0"
              mobilePaddings="5px"
              mobileMargings="0 auto"
            />
          </div>
          <div className={styles.preambule__right}>
            <ul className={styles.aboutList}>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faMicrophoneAlt} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="/">
                      <a>{page.acf.preambule_block_1_text}</a>
                    </Link>
                  </h2>
                  <p>{page.acf.preambule_block_1_description}</p>
                </article>
              </li>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faUserFriends} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="/">
                      <a>{page.acf.preambule_block_2_text}</a>
                    </Link>
                  </h2>
                  <p>{page.acf.preambule_block_2_description}</p>
                </article>
              </li>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faEye} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="/">
                      <a>{page.acf.preambule_block_3_text}</a>
                    </Link>
                  </h2>
                  <p>{page.acf.preambule_block_3_description}</p>
                </article>
              </li>
            </ul>
          </div>
        </div>
        <Partners
          title={page.acf.partners_title}
          subtitle={page.acf.partners_description}
          images={[page.acf.partners_1, page.acf.partners_2, page.acf.partners_3, page.acf.partners_4]}
        />
        <TitleBlock title={page.acf.latest_project_title} text={page.acf.latest_project_subtitle} />
      </div>
      <IndexSlider dataSlider={[
        {
          "id": 0,
          "title": page.acf.latest_project_work_1_title,
          "text": page.acf.latest_project_work_1_desc,
          "link": page.acf.latest_project_work_1_url,
          "img": page.acf.latest_project_work_1_img.url
        },
        {
          "id": 1,
          "title": page.acf.latest_project_work_2_title,
          "text": page.acf.latest_project_work_2_desc,
          "link": page.acf.latest_project_work_2_url,
          "img": page.acf.latest_project_work_2_img.url
        },
      ]} />
      <div className="container">
        <div className="container__brands">
          <TitleBlock title={page.acf.services_title} text={page.acf.services_desc} />
        </div>
        {/* <GridCatalog dataObg={data.indexPage.services} /> */}
        <GridCatalog services={services} />
      </div>
      <Achievement
        dataCard={data.indexPage.achievement.cards}
        experience={data.indexPage.achievement.experience}
      >
        <TitleBlock
          title={data.indexPage.achievement.achievementHeader.title}
          text={data.indexPage.achievement.achievementHeader.text}
          color="#fff"
        />
      </Achievement>
      <div className={styles.videoOuter}>
        <Video
          src={data.indexPage.video.src}
          type={data.indexPage.video.type}
          poster={data.indexPage.video.poster}
        />
      </div>
      <Team
        dataItem={data.indexPage.team.items}
      >
        <TitleBlock
          title={data.indexPage.team.teamHeader.title}
          text={data.indexPage.team.teamHeader.text}
        />
      </Team>
      <div className={styles.testimonialsOuter}>
        <div className={styles.testimonialsOuter__bg}></div>
        <div className={styles.testimonialsOuter__container}>
          <Testimonials
            text={data.indexPage.testimonials.text}
            author={data.indexPage.testimonials.author}
          />
          <div className={styles.testimonialsOuter__latestBlog}>
            <TitleBlock
              title={data.indexPage.latestBlog.title}
              text={data.indexPage.latestBlog.text}
              color="#fff"
            />
          </div>
        </div>
      </div>
      <div className={styles.postsOuter}>
        <Posts dataItem={data.posts} />
      </div>
      <ContactIndex
        contactIndexData={data.indexPage.contactIndexData}
        contactsList={data.indexPage.contactsList}
      />


    </Layout>
  )
}