import styles from './HeaderBurger.module.scss'
import Link from 'next/link'



function HeaderBurger(): JSX.Element {
  return (
    <div className={styles.burger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default HeaderBurger