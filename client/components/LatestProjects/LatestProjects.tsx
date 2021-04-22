import styles from './LatestProjects.module.scss'



type LatestProjectsProp = {
  title: string,
  text: string
}
          

function LatestProjects({title, text}: LatestProjectsProp): JSX.Element {
  return (
    <div className={styles.latestProjects}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}
export default LatestProjects