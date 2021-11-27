import React, { useState, useEffect } from 'react';
import styles from './Video.module.scss'



type VideoProp = {
  src: string,
  type: string,
  poster?: string
}


          

function Video({src, type, poster}: VideoProp): JSX.Element {

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
    myVideo = document.getElementById("video");
  });

  return (
    <div className={styles.video}>
      <div className={styles.video__wrapper}> 
        <video id="video" poster={poster}>
          <source src={src} type={type} />
        </video>
        <button className={`${styles.video__play} ${play ? `${styles.videoPlayActive}` : ""}`} onClick= {() => playPause()}>Play/Pause</button> 
      </div> 
    </div>
  )
}
export default Video