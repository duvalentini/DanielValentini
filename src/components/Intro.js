import React, { Component } from 'react';
import styled from 'styled-components';
import italy from '../images/me_in_italy.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
  padding-bottom: 0.5em;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Image = styled.img`
  max-width: 25em;
  width: 100%;
  height: auto;
  border-radius: 25em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Link = styled.img`
  width: 5em;
  margin: 1em;
`;

const LinkContainer = styled.div`
  padding-top: 1em;
`;

class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Daniel Valentini
        </Title>
        <Image src={italy} />
        <LinkContainer>
          <a href="https://www.linkedin.com/in/daniel-valentini/" target="_blank" rel="noopener noreferrer">
            <Link src={linkedin} />
          </a>
          <a href="https://github.com/duvalentini" target="_blank" rel="noopener noreferrer">
            <Link src={github} />
          </a>
        </LinkContainer>
      </Wrapper>
    );
  }
}

export default Intro;
