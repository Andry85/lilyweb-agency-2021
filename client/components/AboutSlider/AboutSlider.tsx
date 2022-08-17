import React, { Component } from "react";
import Slider from "react-slick";
import styles from './AboutSlider.module.scss';
import Image from 'next/image'


type AboutSliderProp = {
  testemonials: {
    title: string;
    subtitle: string;
  };
  dataSlider: {
    id: number;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    acf: {
      pic: {
        url: string;
      }
    };
  }[];
}


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.nextArrowSlide}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.prevArrowSlide}
      onClick={onClick}
    />
  );
}

export default class AboutSlider extends Component<AboutSliderProp, {}>  {
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
      <div className={styles.aboutSlider}>
        <h2 className={styles.aboutSlider__title}>{this.props.testemonials.title}</h2>
        <h3 className={styles.aboutSlider__subtitle}>{this.props.testemonials.subtitle}</h3>
        <Slider {...settings}>
          {this.props.dataSlider.map((item) =>
            <div key={item.id}>
              <div className={styles.aboutSlider__item}>
                <div className={styles.aboutSlider__media}>
                  <Image
                    src={item.acf.pic.url}
                    alt=""
                    width={270}
                    height={270}
                    layout="responsive"
                  />
                </div>
                <div className={styles.aboutSlider__content}>
                  <div className={styles.aboutSlider__contentInner}>
                    <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    );
  }
}