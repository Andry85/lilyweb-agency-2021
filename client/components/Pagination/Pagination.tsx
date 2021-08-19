import styles from './Pagination.module.scss'
import Link from 'next/link'


          

function Pagination(): JSX.Element {
  return (
    <div className={styles.pagination}>
      <ul>
          <li>
            <Link href="/">
              <a>
                <div className={styles.pagination__prew}>Previous project</div>
                <p>Software Development</p>
              </a> 
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className={styles.pagination__next}>Next project</div>
                <p>Digital Agency Product</p>
              </a>
            </Link>
          </li>
      </ul>
    </div>
  )
}
export default Pagination