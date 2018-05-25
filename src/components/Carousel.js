import React, { Component } from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
    const pictures = this.props.pictures;

    const slides = pictures.map((picture, index) => {
      return(
        <div>
          <img src={picture} />
          <h3>{index + 1}</h3>
        </div>
      );
    });

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default Carousel;
