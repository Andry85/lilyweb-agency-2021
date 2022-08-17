import styles from './WorkTabs.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { changeCategoryID } from "../../redux/actions/actions";
import type { RootState } from '../../redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


type WorkTabsProp = {
  works: {
    id: number;
    title: string;
    description: string;
    pic: string;
    link: string;
    innerLink: string;
  }[];
}


function WorkTabs({ works }: WorkTabsProp): JSX.Element {

  const tabActive = useSelector((state: RootState) => state.workTabs.idCategory);
  const dispatch = useDispatch();
  const uniqueWorks = [];
  let categorieId = null;

  for (let i = 0; i < works.length; i++) {
    if (works[i].acf.categorie_id !== categorieId) {
      categorieId = works[i].acf.categorie_id;
      uniqueWorks.push(works[i]);
    }

  }


  return (
    <div className={styles.workTabs}>
      <div className={styles.workTabs__inner}>
        <ul className={styles.workTabsList}>
          {uniqueWorks.map((item) => {
            let resultIndex = item.acf.categorie_id.indexOf(":");
            let result = item.acf.categorie_id.substring(0, resultIndex);
            let resultNumber = parseInt(result);

            return (
              <li key={resultNumber} className={styles.workTabsList__item} >
                <span onClick={() => dispatch(changeCategoryID(resultNumber))}>{item.acf.categorie}</span>
              </li>
            )
          }
          )}
        </ul>
      </div>
      <div className={styles.workTabsContainer}>
        <div className="grid">
          {works.filter(item => {
            let resultIndex = item.acf.categorie_id.indexOf(":");
            let result = item.acf.categorie_id.substring(0, resultIndex);
            let resultNumber = parseInt(result);
            return resultNumber === tabActive;
          }).map(item => {
            return (
              <div key={item.id} className={[`grid-item--${item.id}`, "grid-item", styles.workTabsContainer__item].join(' ')}>
                <div className={styles.workTabsContainer__picture}>
                  <Image
                    src={item.acf.pic.url}
                    alt=""
                    layout='fill'
                  />
                </div>
                <div className={styles.workTabsContainer__content}>
                  <div className={styles.workTabsContainer__body}>
                    <div className={styles.workTabsContainer__link}>
                      <Link href={item.acf.url}>
                        <a className={styles.workTabsContainer__linkPic}><FontAwesomeIcon icon={faLink} /></a>
                      </Link>
                      <h3>{item.acf.title}</h3>
                      <p>{item.acf.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}
export default WorkTabs