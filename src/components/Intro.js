import React, { Component } from 'react';
import tini from '../images/tini.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import { Wrapper, Image, LinkContainer, Link } from './styles/IntroComponents';
import AboutMe from './AboutMe';

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
        <AboutMe />
      </Wrapper>
    );
  }
}

export default Intro;
