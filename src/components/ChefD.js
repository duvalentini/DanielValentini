import React, { Component } from 'react';
import Carousel from './Carousel';
import amatriciana from '../images/amatriciana.jpg';
import carnitas from '../images/carnitas.jpg';
import chili from '../images/chili.jpg';
import tikka_masala from '../images/tikka_masala.jpg';
import vongole from '../images/vongole.jpg';
import { Wrapper, Title, Info } from './styles/ChefDComponents';

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
