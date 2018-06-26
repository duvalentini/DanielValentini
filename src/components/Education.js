import React, { Component } from 'react';
import styled from 'styled-components';
import osu from '../images/block_o.png';

const Wrapper = styled.section`
  padding: 4em;
  background: linear-gradient(white, #6666);
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
  padding-bottom: 0.5em;
  font-weight: 300;
  font-variant: all-petite-caps;
  letter-spacing: 1px;
`;

const Image = styled.img`
  max-width: 25em;
  width: 100%;
  height: auto;
`;

const Info = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: black;
  padding-top: 1em;
`;

class Education extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Education
        </Title>
        <Image src={osu} />
        <Info>
          B.S. Computer Science & Engineering<br/>
          Class of 2016<br/>
          Alpha Epsilon Pi
        </Info>
      </Wrapper>
    );
  }
}

export default Education;
