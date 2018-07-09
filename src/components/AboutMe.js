import React, { Component } from 'react';
import { Wrapper, Title, Image, Info } from './styles/AboutMeComponents';
import me from '../images/me.jpg';

class Education extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          About Me
        </Title>
        <Image src={me} />
        <Info>
          Born in raised in Cincinnati. Currently living and working in Boston.
        </Info>
      </Wrapper>
    );
  }
}

export default Education;
