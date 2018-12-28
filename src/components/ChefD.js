import React, { Component } from 'react';
import Carousel from './Carousel';
import { Wrapper, Title, Info } from './styles/ChefDComponents';
import Content from './content/ChefDContent';

class ChefD extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          {Content.title}
        </Title>
        <Info>
          {Content.subtitle}
        </Info>
        <Carousel pictures={Content.pictures}/>
      </Wrapper>
    );
  }
}

export default ChefD;
