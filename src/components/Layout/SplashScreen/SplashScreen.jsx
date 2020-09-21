import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../Home/Banner/platty.png';
import { size } from '../../../common/styles';

const Styles = styled.div`
  background-color: ${(props) => props.theme.colors.primary};

  .splash-screen {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
  }

  .rotate {
    height: ${size(6)}px;
    margin-bottom: ${size(3)}px;
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

// eslint-disable-next-line react/prop-types
export const SplashScreen = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <Styles>
      {isLoading ? (
        <div className="splash-screen">
          <img src={logo} alt="logo" className="rotate" />
          <h4>Setting up the party!</h4>
        </div>
      ) : (
        <>{children}</>
      )}
    </Styles>
  );
};
