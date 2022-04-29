import Head from 'next/head'
import styles from '../../styles/Login.module.scss'
import Router from 'next/router'
import {useSelector, useDispatch} from 'react-redux'; 
import {changeUserStatus} from "../../redux/actions/actions"; 




export default function Service({data}) {

  const dispatch = useDispatch();   

  const loginUser = event => {
    event.preventDefault()
  
    if (event.target.username.value === 'peter' && event.target.password.value === '12345') {
      dispatch(changeUserStatus())
      Router.push('/');
    } else {
      alert('wrong username or password');
    }
    
  }
  

  return (
    <div className={styles.loginPage}>
        <Head>
          <title>Service Page</title>
        </Head>
        <div className={styles.loginPageInner}>
          <form onSubmit={loginUser}>
            <div className={styles.loginPage__group}>
              <label>Username:</label>
              <input type="text" placeholder="Enter your user name" name="username" required />
            </div>
            <div className={styles.loginPage__group}>
              <label>Password:</label>
              <input type="password" placeholder="Enter your password" name="password" required />
            </div>
            <button type="submit" className={styles.loginPage__btn}>Login</button>
          </form>
        </div>
    </div>
  )
}