import React, { Component } from 'react';
import { Wrapper, Title, Image, Info } from './styles/EducationComponents';
import Content from './content/EducationContent';

class Education extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          {Content.title}
        </Title>
        <Image src={Content.image} />
        <Info>
          {Content.degreeText}<br/>
          {Content.yearText}<br/>
          {Content.organizationText}
        </Info>
      </Wrapper>
    );
  }
}

export default Education;
