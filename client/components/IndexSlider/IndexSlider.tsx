import React, { Component } from "react";
import Slider from "react-slick";
import styles from './IndexSlider.module.scss'


import Image from 'next/image'



export default class IndexSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={styles.indexSlider}>
        <Slider {...settings}>
          <div className={styles.indexSlider__item}>
            <div className={styles.indexSlider__media}>
              <Image
                src="/images/indexslider/001.jpg"
                alt=""
                width={1067}
                height={700}
                layout="responsive"
            />
            </div>
            <div className={styles.indexSlider__content}>

            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}