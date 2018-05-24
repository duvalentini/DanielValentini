import React, { Component } from 'react';
import styled from 'styled-components';
import osu from '../images/block_o.png';

const Wrapper = styled.section`
  padding: 4em;
  background: #F2F4F4;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

const Image = styled.img`
  width: 25em;
`;

class Education extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Education
        </Title>
        <Image src={osu} />
      </Wrapper>
    );
  }
}

export default Education;
