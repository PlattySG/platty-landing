import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { size } from '../../../common/styles';
import platty from './platty.png';

const Styles = styled.div`
  min-height: calc(100vh - ${size(10)}px - ${size(7)}px);
  background-color: ${(props) => props.theme.colors.secondary};

  .btm-text {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: ${size(2)}px;
  }

  .verical-padding {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    height: auto;
    width: 100%;
  }
`;

export const Banner = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/contact');
  };
  return (
    <Styles>
      <Container>
        <Row style={{ minHeight: '80vh' }}>
          <Col xs={12} md={7} className="verical-padding">
            <h1 className="btm-text">
              Platty is a yield managment reservation platform for
              entertainment services!
            </h1>
            <p className="btm-text">
              One stop platform to book reservations with your
              favourite entertainment centers at a discounted price!
            </p>
            <div>
              <Button variant="outline-light" onClick={handleClick}>
                Pre-Register
              </Button>
              <Button
                variant="outline-light"
                style={{ marginLeft: size(2) }}
                onClick={handleClick}
              >
                Work With Us
              </Button>
            </div>
          </Col>
          <Col xs={12} md={5} className="verical-padding">
            <Tilt tiltReverse trackOnWindow>
              <div>
                <img
                  src={platty}
                  className="logo"
                  alt="Platty Logo"
                />
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
