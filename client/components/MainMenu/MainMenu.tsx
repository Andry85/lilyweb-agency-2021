import styles from './MainMenu.module.scss'
import Link from 'next/link'
import {useSelector, useDispatch} from 'react-redux'; 
import {changeMenuVisibility} from "../../redux/actions/actions"; 
import type {RootState} from '../../redux/store';


type MainMenuProp = {
  ishome?: boolean
}


function MainMenu({ishome}: MainMenuProp): JSX.Element {

  const menuStatus = useSelector((state: RootState) => state.mainMenuReducer.ismenuOpened); 
  const dispatch = useDispatch(); 
  if (menuStatus) {
    return (
      <ul className={`${styles.mainMenu} ${ishome ? `${styles.mainMenuHome}` : ""}`}>
        <li>
          <Link href="/">
            <a onClick={() => dispatch(changeMenuVisibility())}>Home</a>
          </Link>
        </li>  
        <li>
          <Link href="/service">
            <a>Service</a>
          </Link>
        </li> 
        <li>
          <Link href="/about">
            <a onClick={() => dispatch(changeMenuVisibility())}>About Us</a>
          </Link>
        </li> 
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li> 
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>  
      </ul>
    )
  } else {
    return <></>;
  }
}
export default MainMenu