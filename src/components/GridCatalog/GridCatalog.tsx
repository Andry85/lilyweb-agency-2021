import styles from './GridCatalog.module.scss'
import Image from 'next/image'




type GridCatalogProp = {
  dataObg: {
    id: number;
    title: string;
    text: string;
    img: string;
  }[];
}
          

function GridCatalog({dataObg}: GridCatalogProp): JSX.Element {
  return (
    <div className={styles.gridCatalog}>
      <div className={styles.gridCatalog__inner}>
        {dataObg.map((item) => 
          <div key={item.id} className={styles.gridCatalog__item}>
            <div className={styles.gridCatalog__itemInner}>
              <figure>
                <Image
                    src={item.img}
                    alt=""
                    width={68}
                    height={68}
                    objectFit="contain"
                />
              </figure>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default GridCatalog