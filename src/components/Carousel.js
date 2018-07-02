import React, { Component } from 'react';
import Slider from 'react-slick';
import { Image, Caption } from './styles/CarouselComponents';

class Carousel extends Component {
  render() {
    const pictures = this.props.pictures;

    const slides = pictures.map((picture, index) => {
      return(
        <div key={index}>
          <Image src={picture.image} />
          <Caption>{picture.title}</Caption>
        </div>
      );
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500
    };

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default Carousel;
