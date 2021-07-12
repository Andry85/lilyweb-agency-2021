import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import styles from './WorkTabs.module.scss'
import {useSelector, useDispatch} from 'react-redux'; 
import {changeCategoryID} from "../../redux/actions/actions"; 
import type {RootState} from '../../redux/store';
import Image from 'next/image';
import Link from 'next/link';


type WorkTabsProp = {
  categories: {
    id: number;
    title: string;
    works: {
      id: number;
      title: string;
      description: string;
      pic: string;
      link: string;
      innerLink: string;
    }[];
  }[];
}
          

function WorkTabs({categories}: WorkTabsProp): JSX.Element {

  const tabActive = useSelector((state: RootState) => state.workTabs.idCategory); 
  const dispatch = useDispatch(); 

  return (
    <div className={styles.workTabs}>
        <div className={styles.workTabs__inner}>
          <ul className={styles.workTabsList}>
            {categories.map((item) => 
                <li key={item.id} className={styles.workTabsList__item}>     
                    <span onClick={() => dispatch(changeCategoryID(item.id))}>{item.title}</span>
                </li>
            )}
          </ul>
        </div>
        <div className={styles.workTabsContainer}>
            {categories.filter(item => item.id === tabActive).map(filteredData => (
              <div key={filteredData.id} className={styles.workTabsContainer__inner}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry gutter="20px" columnsCount={3}>
                      {filteredData.works.map((item) => 
                          <div key={item.id} className={styles.workTabsContainer__item}>     
                              <div className={styles.workTabsContainer__picture}> 
                                <Image
                                    src={item.pic}
                                    alt=""
                                    layout='fill'
                                />
                              </div>
                              <div className={styles.workTabsContainer__content}>
                                <div className={styles.workTabsContainer__body}>
                                  <div className={styles.workTabsContainer__link}>
                                    <Link href={item.innerLink}>
                                      <a className={styles.workTabsContainer__linkPic}></a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                          </div>
                      )}
                    </Masonry>
                </ResponsiveMasonry>
              </div>
            ))}
        </div>
    </div>
  )
}
export default WorkTabs