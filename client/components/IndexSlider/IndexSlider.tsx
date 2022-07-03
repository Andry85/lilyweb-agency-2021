import React, { Component } from "react";
import Slider from "react-slick";
import styles from './IndexSlider.module.scss';
import Button from '../Button/Button';

import Image from 'next/image'

type IndexSliderProp = {
  dataSlider: {
    id: number;
    title: string;
    text: string;
    link: string;
    img: string;
  }[];
}


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.nextArrow}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.prevArrow}
      onClick={onClick}
    />
  );
}

export default class IndexSlider extends Component<IndexSliderProp, {}>  {
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
      <div className={styles.indexSlider}>
        <Slider {...settings}>
          {this.props.dataSlider.map((item) =>
            <div key={item.id} className={styles.indexSlider__item}>
              <div className={styles.indexSlider__media}>
                <Image
                  src={item.img}
                  alt=""
                  width={1067}
                  height={700}
                  layout="responsive"
                />
              </div>
              <div className={styles.indexSlider__content}>
                <div className={styles.indexSlider__contentInner}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <Button
                    href={item.link}
                    title="Переглянути проект"
                    color="#2341dd"
                    background="transparent"
                    border="2px solid #2341dd"
                    borderRadius="0px"
                    textTransform="uppercase"
                    colorHover="#fff"
                    backgroundHover="#2341dd"
                    paddings="10px 20px"
                    margings="43px 0 0 0"
                    mobilePaddings="5px"
                    mobileMargings="23px 0 0 0"
                  />
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    );
  }
}