import React, { Component } from 'react';
import { Wrapper, Title, Image, Info } from './styles/AboutMeComponents';

class Education extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          About Me
        </Title>
        <Title>
          put picture here
        </Title>
        <Info>
          Short paragraph describing myself.
        </Info>
      </Wrapper>
    );
  }
}

export default Education;
