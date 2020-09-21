import React from 'react';
import styled from 'styled-components';
import { size } from '../../common/styles';

const Styles = styled.div`
  height: calc(100vh - ${size(10)}px);
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ContactContainer = () => (
  <Styles>
    <h1>Contact</h1>
  </Styles>
);
