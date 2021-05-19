import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';  
import type {RootState} from '../../redux/store';
import {changeMenuVisibility} from "../../redux/actions/actions"; 
import styles from './HeaderBurger.module.scss'

type HeaderBurgerProp = {
  ishome?: boolean
}

function HeaderBurger({ishome}: HeaderBurgerProp): JSX.Element {

  const menuStatus = useSelector((state: RootState) => state.mainMenuReducer.ismenuOpened);  
 	const dispatch = useDispatch();   

  return (
    <div className={`${styles.burger} ${ishome ? `${styles.ishome}` : ""}`} onClick={() => dispatch(changeMenuVisibility())}>
      <div className={`${menuStatus ? `${styles.burger__isOpened}` : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
export default HeaderBurger