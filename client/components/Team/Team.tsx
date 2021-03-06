import styles from './Team.module.scss'
import Item from './Item/Item';




type TeamProp = {
  children: React.ReactNode;
  dataItem: {
    id: number;
    img: string;
    title: string;
    position: string;
    phone: string;
    socials: {
      id: number;
      icon: string;
      url: string
    }[];
  }[];
}
          

function Team({children, dataItem}: TeamProp): JSX.Element {
  return (
    <div className={styles.team}>
      <div className={styles.team__inner}>
        {children}
        <Item dataItem = {dataItem} />
      </div>
    </div>
  )
}
export default Team