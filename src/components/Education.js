import React, { Component } from 'react';
import osu from '../images/block_o.png';
import { Wrapper, Title, Image, Info } from './styles/EducationComponents';

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
