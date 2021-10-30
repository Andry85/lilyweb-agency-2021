import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Adminka.module.scss'
import Menu from '../../admin-components/Menu/Menu'
import AddTitle from '../../admin-components/AddTitle/AddTitle'







// export async function getStaticProps(context) {
//   const res = await fetch('http://localhost:5000/api/data');
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       data: data
//     }, // will be passed to the page component as props
//   }
// }

export async function getServerSideProps(ctx) {

  return {
      props: {
          posts: ['Adminka'],
      },
  };
}



export default function Admin({posts}) {


  return (
    <div className={styles.adminka}>
        <Head>
          <title>Admin Page</title>
        </Head>
        <Menu />
        <AddTitle />
    </div>
  )
}


