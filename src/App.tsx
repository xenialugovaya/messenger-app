import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  background: #111;
  color: #fff;
  text-align: center;
`;

export const App: React.FC<{}> = () => <H1>Hello</H1>;
