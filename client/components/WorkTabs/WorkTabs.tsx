import styles from './WorkTabs.module.scss'
import {useSelector, useDispatch} from 'react-redux'; 
import {changeCategoryID} from "../../redux/actions/actions"; 
import type {RootState} from '../../redux/store';
import Image from 'next/image'


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
                


                {filteredData.works.map((item) => 
                    <div key={item.id} className={styles.workTabsContainer__item}>     
                        <div key={item.id} className={styles.workTabsContainer__picture}> 
                          <Image
                              src={item.pic}
                              alt=""
                              layout='fill'
                          />
                        </div>
                    </div>
                )}

              </div>
            ))}
        </div>
    </div>
  )
}
export default WorkTabs