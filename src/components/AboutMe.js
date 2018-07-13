import React, { Component } from 'react';
import { Wrapper, Title, Image, Info, InfoContainer } from './styles/AboutMeComponents';
import me from '../images/me.jpg';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  expandText() {
    this.setState(prevState => ({expanded: !prevState.expanded}));
  };

  render() {
    return (
      <Wrapper>
        <Title>
          About Me
        </Title>
        <Image src={me} />
        <InfoContainer expanded={this.state.expanded} onClick={this.expandText.bind(this)} >
          <Info>
            Born in raised in Cincinnati. I am a software engineer currently living and working in Boston.
            I am a lover of travel, music, video games, and all things food.
          </Info>
        </InfoContainer>
      </Wrapper>
    );
  }
}

export default AboutMe;
