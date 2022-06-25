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
import { getWorks, getPosts } from '../utils/wordpress';





export async function getStaticProps(context) {
  const res = await fetch('http://localhost:5000/api/data');
  const data = await res.json()

  const posts = await getPosts();
  const works = await getWorks();


  if (!posts || !works) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      works
    }, // will be passed to the page component as props
    revalidate: 10, // In seconds
  }
}



export default function Index({ data }) {


  return (
    <Layout home>
      <div className="container">
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
        <TitleBlock title={data.indexPage.latestProject.title} text={data.indexPage.latestProject.text} />
      </div>
      <IndexSlider dataSlider={data.indexPage.indexSlider} />
      <div className="container">
        <div className="container__brands">
          <TitleBlock title={data.indexPage.brandingServices.title} text={data.indexPage.brandingServices.text} />
        </div>
        <GridCatalog dataObg={data.indexPage.services} />
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