import styles from './HeaderLogo.module.scss'
import Image from 'next/image'
import Link from 'next/link'


type HeaderLogoProp = {
  name: string;
  ishome?: boolean
}


function HeaderLogo({name, ishome}: HeaderLogoProp): JSX.Element {
  return (
    <div className={`${styles.logo} ${ishome ? `${styles.logoHome}` : ""}`}>
        <Image
            src="/images/lily.svg"
            alt=""
            width={44}
            height={44}
          />
        <Link href="/">
          <a>{name}</a>
        </Link>
    </div>
  )
}
export default HeaderLogo