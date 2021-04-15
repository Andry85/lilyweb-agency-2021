import React, { useState } from 'react';
import styles from './HeaderBurger.module.scss'
import Link from 'next/link'

type HeaderBurgerProp = {
  ishome: boolean
}


function HeaderBurger({ishome}: HeaderBurgerProp): JSX.Element {

  const [menuStatus, setMenuStatus] = useState(false);

  console.log(menuStatus);

  return (
    <div className={`${styles.burger} ${ishome ? `${styles.ishome}` : ""}`} onClick={() => setMenuStatus(!menuStatus)}>
      <div className={`${menuStatus ? `${styles.burger__isOpened}` : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
export default HeaderBurger