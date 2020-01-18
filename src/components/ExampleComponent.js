import React from "react";
import styled from "styled-components";

const ExampleStyledComponent = styled.div`
  color: ${props => props.color};
`;

export const ExampleComponent = () => (
  <ExampleStyledComponent color="red">
    <p>This is an example of using styled component in a React</p>
  </ExampleStyledComponent>
);

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: styles => `
  @media only screen and (max-width:590px){
    ${styles}
  }`,
};

export const Col = styled.div`
  border: 1px solid black;
  flex: ${props => props.size};
  ${props =>
    props.collapse &&
    media[props.collapse](`
display: none;
  `)}
`;
