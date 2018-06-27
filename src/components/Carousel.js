import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Image = styled.img`
  max-width: 25em;
  width: 100%;
  height: auto;
  display: inline !important;
`;

const Caption = styled.p`
  font-size: 1em;
  text-align: center;
  color: black;
  padding-top: 0.5em;
`;

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
