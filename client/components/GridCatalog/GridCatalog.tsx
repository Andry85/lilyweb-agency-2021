import styles from './GridCatalog.module.scss'
import Image from 'next/image'




type GridCatalogProp = {
  services: {
    id: number;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
  }[];
}


function GridCatalog({ services }: GridCatalogProp): JSX.Element {
  return (
    <div className={styles.gridCatalog}>
      <div className={styles.gridCatalog__inner}>
        {services.map((item) => {
          const featuredMedia = item['_embedded']['wp:featuredmedia'][0];
          return (
            <div key={item.id} className={styles.gridCatalog__item}>
              <div className={styles.gridCatalog__itemInner}>
                <figure>
                  <Image
                    src={featuredMedia.source_url}
                    alt=""
                    width={68}
                    height={68}
                    objectFit="contain"
                  />
                </figure>
                <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h3>
                <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
              </div>
            </div>)
        }
        )}
      </div>
    </div>
  )
}
export default GridCatalog