import styles from './MainMenu.module.scss'
import Link from 'next/link'
import {useSelector} from 'react-redux'; 
import type {RootState} from '../../redux/store';


type MainMenuProp = {
  ishome?: boolean,
  pagesList: {
    id: number;
    name: string;
    path: string;
  }[]
}


function MainMenu({ishome, pagesList}: MainMenuProp): JSX.Element {

  const menuStatus = useSelector((state: RootState) => state.mainMenuReducer.ismenuOpened); 
  
  
  if (menuStatus) {
    return (
      <ul className={`${styles.mainMenu} ${ishome ? `${styles.mainMenuHome}` : ""}`}>
        {pagesList.map((item) =>
          <li key={item.id}>
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </li>  
        )}
      </ul>
    )
  } else {
    return <></>;
  }
}
export default MainMenu