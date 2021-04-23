import styles from './Achievement.module.scss'
import Card from './Card/Card';




type AchievementProp = {
  children: React.ReactNode;
  experience: {
    count: number;
    title: string;
    subtitle: string;
  };
  dataCard: {
    id: number;
    img: string;
    title: string;
    count: number;
  }[];
}
          

function Achievement({children, dataCard, experience}: AchievementProp): JSX.Element {
  return (
    <div className={styles.achievement}>
      <div className={styles.achievement__container}>
        {children}
        <div className={styles.achievement__inner}>
          <div className={styles.achievement__col_1}>
              <Card dataCard = {dataCard} />
          </div>
          <div className={styles.achievement__col_2}>
            <div className={styles.experience}>
                <h3>{experience.title}</h3>
                <div className={styles.experience__count}>{experience.count}</div>
                <p>{experience.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Achievement