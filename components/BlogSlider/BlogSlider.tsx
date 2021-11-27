import React, { Component } from "react";
import Slider from "react-slick";
import styles from './BlogSlider.module.scss';

import Image from 'next/image'

type BlogSliderProp = {
  dataSlider: [];
}


function NextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className={styles.blogSlider__nextArrow}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={styles.blogSlider__prevArrow}
      onClick={onClick}
    />
  );
}

export default class BlogSlider extends Component<BlogSliderProp, {}>  {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div className={styles.blogSlider}>
        <Slider {...settings}>
        {this.props.dataSlider.map((item, index) =>
          <div key={index} className={styles.blogSlider__item}>
              <Image
                src={item}
                alt=""
                width={1067}
                height={700}
                layout="responsive"
            />
          </div>
        )}
        </Slider>
      </div>
    );
  }
}