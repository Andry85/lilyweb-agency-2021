import Head from 'next/head'
import styles from '../styles/Index.module.scss'
import Layout from '../components/layout'
import Button from '../components/Button/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt, faUserFriends, faEye} from '@fortawesome/free-solid-svg-icons'
import Partners from '../components/Partners/Partners';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import IndexSlider from '../components/IndexSlider/IndexSlider';
import GridCatalog from '../components/GridCatalog/GridCatalog';
import Achievement from '../components/Achievement/Achievement';
import Video from '../components/Video/Video';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import ContactIndex from '../components/ContactIndex/ContactIndex';





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
      <div className="container">
        <Head>
          <title>Index Page</title>
        </Head>
        <div className={styles.preambule} id="about">
          <div className={styles.preambule__left}>
            <h2>Ми допомагаємо розвивати ваш бізнес.</h2>
            <p>Ми допомагаємо малому бізнесу просувати їхні продукти та послуги за допомогую ствроння Landing Pages.</p>
          </div>
          <div className={styles.preambule__right}>
            <ul className={styles.aboutList}>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faMicrophoneAlt} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="#services">
                      <a>Що ми робимо</a>
                    </Link>
                  </h2>
                  <p>Проектуєм односторінкові веб сайти (landing pages) які найкраще підходять для промоції продукту чи послуги і є швидкими в виготовлення та доступними по ціні.</p>
                </article>
              </li>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faUserFriends} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="#team">
                      <a>Наша команда</a>
                    </Link>
                  </h2>
                  <p>Це творчі спеціалісти які допоможуть вам підібрати краще рішення що задовільнить ваші потреби.</p>
                </article>
              </li>
              <li>
                <span className={styles.aboutList__circle}><FontAwesomeIcon icon={faEye} /></span>
                <article className={styles.aboutList__content}>
                  <h2>
                    <Link href="#works">
                      <a>Наші роботи</a>
                    </Link>
                  </h2>
                  <p>Кращі виконані рішення  ви можете переглянути на нашому сайті.</p>
                </article>
              </li>
            </ul>
          </div>
        </div>
        <Partners title="15 років досвіду" subtitle="Наші спеціалісти мають більш ніж 15 років досвіду в розробці веб сайтів різних типів і складностей." />
        <div id="works">
          <TitleBlock title="Останні проекти" text="Нижче приведені наші останні роботи які варті вашої уваги" />
        </div>
      </div>
      <IndexSlider dataSlider = {data.indexPage.indexSlider} />
      <div className="container">
        <div className="container__brands" id="services">
          <TitleBlock title="Розробляємо односторінкові веб сайти (landing pages)" text="Допомогаємо створити накращі сторінки які опишуть ваш товар чи послуги в найдоступнішому і зрозумілому вигляді" />
        </div>
        <GridCatalog dataObg = {data.indexPage.services} />
      </div>
      <Achievement 
        dataCard = {data.indexPage.achievement.cards}
        experience = {data.indexPage.achievement.experience}
       >
        <TitleBlock 
          title={data.indexPage.achievement.achievementHeader.title} 
          text={data.indexPage.achievement.achievementHeader.text} 
          color = "#fff"
        />
      </Achievement>
      <div className={styles.videoOuter}>
        <Video
          src={data.indexPage.video.src} 
          type={data.indexPage.video.type} 
          poster={data.indexPage.video.poster} 
        />
      </div>
      <div id="team">
        <Team 
          dataItem = {data.indexPage.team.items}
        >
          <TitleBlock 
            title={data.indexPage.team.teamHeader.title} 
            text={data.indexPage.team.teamHeader.text} 
          />
        </Team>
      </div>
      <div className={styles.testimonialsOuter}>
        <div className={styles.testimonialsOuter__bg}></div>
        <div className={styles.testimonialsOuter__container}>
            <Testimonials
              text={data.indexPage.testimonials.text}
              author={data.indexPage.testimonials.author}  
            />
        </div>
      </div>
      <div id="contact">
      <ContactIndex
        contactIndexData = {data.indexPage.contactIndexData}
        contactsList = {data.indexPage.contactsList}
        />
      </div>
    </Layout>
  )
}