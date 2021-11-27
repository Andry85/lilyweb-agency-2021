import styles from './TitleBlock.module.scss'



type TitleBlockProp = {
  title: string,
  text: string,
  color?: string
}
          

function TitleBlock({title, text, color}: TitleBlockProp): JSX.Element {
  return (
    <div className={styles.titleBlockProp} style={{color: color}}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}
export default TitleBlock