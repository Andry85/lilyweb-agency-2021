import styles from './Menu.module.scss'
import Link from 'next/link'






          

function Menu() {

  const data = {
    "pages": [
      {
          "id": 0,
          "name": "Home",
          "pathAdmin": "/adminka"
      },
      {
          "id": 1,
          "name": "Service",
          "pathAdmin": "/adminka/service"
      },
      {
          "id": 2,
          "name": "About Us",
          "pathAdmin": "/adminka/about"
      },
      {
          "id": 3,
          "name": "Works",
          "pathAdmin": "/adminka/portfolio"
      },
      {
          "id": 4,
          "name": "Blog",
          "pathAdmin": "/adminka/blogs"
      },
      {
          "id": 5,
          "name": "Contact",
          "pathAdmin": "/adminka/contact"
      }
    ]
  }

  return (
    <div className={styles.menu}>
      <ul className={styles.menu__inner}>
        {data.pages.map((item) => 
          <li key={item.id} className={styles.menu__item}>
           <Link href={item.pathAdmin}>
              <a>{item.name}</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
export default Menu