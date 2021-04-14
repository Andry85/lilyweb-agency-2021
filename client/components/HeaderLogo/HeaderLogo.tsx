import styles from './HeaderLogo.module.scss'
import Image from 'next/image'
import Link from 'next/link'


interface HeaderLogoProp {
  name: string;
  color: string;
}


function HeaderLogo(prop: HeaderLogoProp): JSX.Element {
  return (
    <div className={styles.logo}>
        <Image
            src="/images/lily.svg"
            alt=""
            width={44}
            height={44}
          />
        <Link href="/">
          <a style={{color: prop.color}}>{prop.name}</a>
        </Link>
    </div>
  )
}
export default HeaderLogo