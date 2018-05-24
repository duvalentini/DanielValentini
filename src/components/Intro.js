import React, { Component } from 'react';
import styled from 'styled-components';
import italy from '../images/me_in_italy.jpg';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Image = styled.img`
  width: 25em;
  border-radius: 25em;
`;

class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Daniel Valentini
        </Title>
        <Image src={italy} />
      </Wrapper>
    );
  }
}

export default Intro;
