import styles from './Achievement.module.scss'



type AchievementProp = {
  children: React.ReactNode;
}
          

function Achievement({children}: AchievementProp): JSX.Element {
  return (
    <div className={styles.achievement}>
      <div className={styles.achievement__container}>
        {children}
      </div>
    </div>
  )
}
export default Achievement