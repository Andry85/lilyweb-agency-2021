import styles from './MainMenu.module.scss'
import Link from 'next/link'
import {useSelector} from 'react-redux';  


type MainMenuProp = {
  ishome: boolean
}


function MainMenu({ishome}: MainMenuProp): JSX.Element {

  const menuStatus = useSelector((state) => state.mainMenuReducer.ismenuOpened);  
  if (menuStatus) {
    return (
      <ul className={`${styles.mainMenu} ${ishome ? `${styles.mainMenuHome}` : ""}`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>  
        <li>
          <Link href="/service">
            <a>Service</a>
          </Link>
        </li> 
        <li>
          <Link href="/about">
            <a>About Us</a>
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