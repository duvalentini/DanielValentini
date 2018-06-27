import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import amatriciana from '../images/amatriciana.jpg';
import carnitas from '../images/carnitas.jpg';
import chili from '../images/chili.jpg';
import hot_chicken from '../images/hot_chicken.jpg';
import tikka_masala from '../images/tikka_masala.jpg';
import vongole from '../images/vongole.jpg';

const Wrapper = styled.section`
  padding: 4em;
  background: linear-gradient(#6666, white);
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
  font-weight: 300;
  font-variant: all-petite-caps;
  letter-spacing: 1px;
`;

const Info = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: black;
  padding-top: 1em;
`;

const pictures = [
  {
    image: carnitas,
    title: 'Taco de Carnitas'
  },
  {
    image: amatriciana,
    title: 'Rigatoni All\'Amatriciana'
  },
  {
    image: chili,
    title: 'Chili con Carne'
  },
  // {
  //   image: hot_chicken,
  //   title: 'Nashville Hot Chicken'
  // },
  {
    image: tikka_masala,
    title: 'Chicken Tikka Masala'
  },
  {
    image: vongole,
    title: 'Linguine alle Vongole'
  }
];

class ChefD extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Chef D
        </Title>
        <Info>
          Recent Creations
        </Info>
        <Carousel pictures={pictures}/>
      </Wrapper>
    );
  }
}

export default ChefD;
