import React, { Component } from "react";
import Slider from "react-slick";
import styles from './IndexSlider.module.scss';
import Button from '../Button/Button';

import Image from 'next/image'

type IndexSliderProp = {
  dataSlider: {
    id: number;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    acf: {
      url_link: string;
      url_title: string;
    };
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
          {this.props.dataSlider.map((item) => {
            const featuredMedia = item['_embedded']['wp:featuredmedia'][0];
            return (
              <div key={item.id} className={styles.indexSlider__item}>
                <div className={styles.indexSlider__media}>
                  <Image
                    src={featuredMedia.source_url}
                    alt=""
                    width={1067}
                    height={700}
                    layout="responsive"
                  />
                </div>
                <div className={styles.indexSlider__content}>
                  <div className={styles.indexSlider__contentInner}>
                    <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                    <Button
                      href={item.acf.url_link}
                      title={item.acf.url_title}
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
            )
          }



          )}
        </Slider>
      </div>
    );
  }
}