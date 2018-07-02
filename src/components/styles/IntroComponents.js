import styled from 'styled-components';

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

export {
  Wrapper,
  Image,
  Link,
  LinkContainer
};
