import styles from './Posts.module.scss'
import Post from './Post/Post';




type PostsProp = {
  dataItem: {
    id: number;
    img: string;
    url: string;
    date: string;
    title: string;
    text: string;
    author?: string;
  }[];
}
          

function Posts({dataItem}: PostsProp): JSX.Element {
  return (
    <div className={styles.posts}>
      <div className={styles.posts__inner}>
        <Post dataItem = {dataItem} />
      </div>
    </div>
  )
}
export default Posts