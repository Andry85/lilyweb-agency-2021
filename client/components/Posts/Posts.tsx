import styles from './Posts.module.scss'
import Post from './Post/Post';




type PostsProp = {
  dataItem: {
    id: number;
    acf: {
      pic: {
        url: string;
      }
    };
    slug: string;
    date: string;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    author?: string;
  }[];
}


function Posts({ dataItem }: PostsProp): JSX.Element {
  return (
    <div className={styles.posts}>
      <div className={styles.posts__inner}>
        <Post dataItem={dataItem} />
      </div>
    </div>
  )
}
export default Posts