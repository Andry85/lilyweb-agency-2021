import styles from './PaginationBlog.module.scss'
import Link from 'next/link'


type PaginationBlogProp = {
  paginatorList: number,
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
          


function PaginationBlog({prevW, nextW, paginatorList}: PaginationBlogProp): JSX.Element {

  const paginatorListArr = [];

  for(let i = 0; i < paginatorList; i++) {
    paginatorListArr.push(i);
  }

  console.log(paginatorListArr);

  // const prevUrl = prevW.innerLink;
  // const prevUrlArr = prevUrl.split('/');
  // const prevUrlLink = prevUrlArr[prevUrlArr.length -1];

  // const nextUrl = nextW.innerLink;
  // const nextUrlArr = nextUrl.split('/');
  // const nextUrlLink = nextUrlArr[nextUrlArr.length -1];


  return (
    <div className={styles.paginationBlog}>
      <div className={styles.paginationBlog__wrapper}>
        <div className={styles.paginationBlog__inner}>
          <ul className={styles.paginationBlog__list}>
              <li className={styles.paginationBlog__item}>
                <Link href="#">
                  <a>
                    <div className={styles.paginationBlog__prew}>
                      <span>Prev</span>
                    </div>
                  </a> 
                </Link>
              </li>

              {paginatorListArr.map((item) => 

                <li key={item} className={styles.paginationBlog__item}>
                  <Link href="#">
                    <a>
                      <div>
                        <span>{item + 1}</span>
                      </div>
                    </a> 
                  </Link>
                </li>
              )}

              <li className={styles.paginationBlog__item}>
                <Link href='#'>
                  <a>
                    <div className={styles.paginationBlog__next}>
                      <span>Next</span>
                    </div>
                  </a>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default PaginationBlog