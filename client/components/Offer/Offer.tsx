import React, { useState, useEffect } from 'react';
import styles from './Offer.module.scss'
import Image from 'next/image'



type OfferProp = {
  src: string,
  type: string,
  poster?: string,
  offerList: {
    id: number;
    icon: string;
    title: string;
    text: string;
  }[];
}


          

function Offer({src, type, poster, offerList}: OfferProp): JSX.Element {

  const [play, setPlay] = useState(false);

  let myVideo;

  let playPause = () => {
    setPlay(!play); 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  };

  useEffect(() => {
    myVideo = document.getElementById("vid");
  });

  return (
    <div className={styles.offer}>
      <div className={styles.offer__wrapper}> 
        <div className={styles.offer__col_1}>
          <ul className={styles.offersList}>
            {offerList.map((item) => 
              <li key={item.id} className={styles.offersList__item}>     
                  <div className={styles.offersList__pic}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={60}
                        height={60}
                        objectFit="contain"
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.offer__col_2}>
          <div className={styles.offer__video}>
            <video id="vid" poster={poster}>
              <source src={src} type={type} />
            </video>
            <button className={`${styles.offer__play} ${play ? `${styles.offerPlayActive}` : ""}`} onClick= {() => playPause()}>Play/Pause</button>
          </div>
        </div>  
      </div> 
    </div>
  )
}
export default Offer