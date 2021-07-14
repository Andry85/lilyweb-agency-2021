import React, { useState, useEffect } from 'react';
import styles from './WorkTabs.module.scss'
import {useSelector, useDispatch} from 'react-redux'; 
import {changeCategoryID} from "../../redux/actions/actions"; 
import type {RootState} from '../../redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


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

  useEffect(() => {
    setTimeout(function(){
      var elem = document.querySelector('.grid');
      var msnry = new Masonry( elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true
      });
     }, 500);
  });

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
              <div key={filteredData.id} className="grid">
                      {filteredData.works.map((item) => 
                          <div key={item.id} className={[`grid-item--${item.id}`, "grid-item", styles.workTabsContainer__item].join(' ')}>     
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
                                      <a className={styles.workTabsContainer__linkPic}><FontAwesomeIcon icon={faLink} /></a>
                                    </Link>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                  </div>
                                </div>
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