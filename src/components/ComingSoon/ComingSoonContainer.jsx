import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { size } from '../../common/styles';
import { Cursor } from './Cursor';

const Styles = styled.div`
  height: calc(100vh - ${size(10)}px);
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: none;
  position: relative;

  .instructions {
    color: ${(props) => props.theme.colors.white};
  }

  .instructions-hidden {
    color: ${(props) => props.theme.colors.secondary};
    margin-left: ${size(2)}px;
    font-weight: 700;
    font-size: ${size(5)}px;
  }

  .outer-container {
    display: flex;
    justify-content: center;
  }

  .hovered {
    z-index: 1;
  }

  .hidden {
    position: absolute;
    bottom: 60px;
    left: 40px;
  }

  .hidden-2 {
    position: absolute;
    top: 20px;
    right: 80px;
  }

  .hidden-3 {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .logo {
    height: ${size(6)}px;
  }
`;

export const ComingSoonContainer = () => {
  return (
    <Styles>
      <Cursor />
      <Container className="outer-container">
        <p className="hovered instructions">
          Try to find Platty and what is coming next
        </p>
      </Container>
      <div className="hovered hidden">
        <p className="instructions-hidden">
          Coming Soon! Stay Tuned!
        </p>
      </div>
      <div className="hovered hidden-2">
        <p className="instructions-hidden">You found a easter egg!</p>
      </div>
    </Styles>
  );
};
