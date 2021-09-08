import React, { useState } from 'react';
import styles from './PaginationBlog.module.scss'


type PaginationBlogProp = {
  childToParent: (childdata: any) => void,
  prevPage: (childdata: any) => void,
  nextPage: (childdata: any) => void,
  paginatorList: number,
  currentPage: number,
  step: number
}

          

function PaginationBlog({paginatorList, childToParent, currentPage, step, prevPage, nextPage}: PaginationBlogProp): JSX.Element {
  const [current, setCurrent] = useState(0);
  const paginatorListArr = [];

  for(let i = 0; i < paginatorList; i++) {
    paginatorListArr.push(i);
  }

  return (
    <div className={styles.paginationBlog}>
      <div className={styles.paginationBlog__wrapper}>
        <div className={styles.paginationBlog__inner}>
          <ul className={styles.paginationBlog__list}>
              <li className={styles.paginationBlog__item}>
                  <i onClick={() => {
                      prevPage(current)
                    }}>
                    <div className={styles.paginationBlog__prew}>
                      <span>Prev</span>
                    </div>
                  </i> 
              </li>

              {paginatorListArr.map((item) => 

                <li key={item} className={styles.paginationBlog__item}>
                    <i onClick={() => {
                      childToParent(item + 1)
                      setCurrent(item + 1)
                    }}>
                      <div>
                        <span>{item + 1}</span>
                      </div>
                    </i> 
                </li>
              )}

              <li className={styles.paginationBlog__item}>
                    <i onClick={() => {
                        nextPage(current)
                      }}>
                      <div className={styles.paginationBlog__prew}>
                        <span>Next</span>
                      </div>
                    </i> 
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default PaginationBlog