import styles from './Pagination.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';

type PaginationProp = {
  prevW: {
    id: number;
    title: string;
    innerLink: string;
  },
  nextW: {
    id: number;
    title: string;
    innerLink: string;
  }
}
          


function Pagination({prevW, nextW}: PaginationProp): JSX.Element {

  const prevUrl = prevW.innerLink;
  const prevUrlArr = prevUrl.split('/');
  const prevUrlLink = prevUrlArr[prevUrlArr.length -1];

  const nextUrl = nextW.innerLink;
  const nextUrlArr = nextUrl.split('/');
  const nextUrlLink = nextUrlArr[nextUrlArr.length -1];


  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__wrapper}>
        <div className={styles.pagination__inner}>
          <ul className={styles.pagination__list}>
              <li className={styles.pagination__item}>
                <Link href={prevUrlLink}>
                  <a>
                    <div className={styles.pagination__prew}>
                      <FontAwesomeIcon icon={faLongArrowAltLeft} />
                      <span>Previous project</span>
                      </div>
                    <h3>{prevW.title}</h3>
                  </a> 
                </Link>
              </li>
              <li className={styles.pagination__item}>
                <Link href={nextUrlLink}>
                  <a>
                    <div className={styles.pagination__next}>
                      <span>Next project</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </div>
                    <h3>{nextW.title}</h3>
                  </a>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Pagination