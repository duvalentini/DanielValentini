import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 15em;
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
  max-width: 22em;
  width: 100%;
  height: auto;
  border-radius: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Info = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: black;
  padding-top: 1em;
`;

const InfoContainer = styled.div`
  position: relative;
  height: ${props => props.expanded ? '100%' : '12em'};
  overflow: hidden;

  &:after {
    content: "";
    display: ${props => props.expanded ? 'none' : 'initial'};
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 10em;
    background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 50%);
  }
`;
//TODO Limit text width on desktop view

export {
  Wrapper,
  Title,
  Image,
  Info,
  InfoContainer
};
