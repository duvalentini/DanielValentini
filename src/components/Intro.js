import React, { Component } from 'react';
import styled from 'styled-components';
import tini from '../images/tini.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Wrapper = styled.section`
  padding: 4em;
  background: white;
`;

const Image = styled.img`
  max-width: 25em;
  width: 100%;
  height: auto;
`;

const Link = styled.img`
  width: 5em;
  margin: 1em;
  &:hover {
    transform: translateY(-4px);
    opacity: 0.5;
    transition-timing-function: ease-in-out;
  }
`;

const LinkContainer = styled.div`
  padding-top: 1em;
`;

class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <Image src={tini} />
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
