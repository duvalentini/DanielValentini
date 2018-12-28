import React, { Component } from 'react';
import { Wrapper, Title, Image, Info, InfoContainer } from './styles/AboutMeComponents';
import Content from './content/AboutMeContent';

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
          {Content.title}
        </Title>
        <Image src={Content.image} />
        <InfoContainer expanded={this.state.expanded} onClick={this.expandText.bind(this)} >
          <Info>
            {Content.body}
          </Info>
        </InfoContainer>
      </Wrapper>
    );
  }
}

export default AboutMe;
