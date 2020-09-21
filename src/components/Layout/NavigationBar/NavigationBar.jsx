import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from './logo.png';
import { size } from '../../../common/styles/index';

const Styles = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};

  .nav-bar {
    padding: ${size(2)}px;
    z-index: 999;
  }

  .logo {
    height: ${size(6)}px;
    width: 'auto';
  }

  .display-none {
    cursor: none !important;
  }

  .custom-nav-link {
    color: ${(props) => props.theme.colors.white};
    margin-right: ${size(2)}px;
    font-weight: 700;
  }

  .custom-nav-link:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const NavigationBar = () => {
  const match = useRouteMatch('/comingsoon');

  return (
    <Styles>
      <Container className={match ? 'display-none' : ''}>
        <Navbar expand="sm" className="nav-bar">
          <Link to="/">
            <img src={logo} className="logo" alt="Platty Logo" />
          </Link>
          {!match && (
            <>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="ml-auto align-items-center">
                  <Link to="/contact" className="custom-nav-link">
                    Be Our Partner!
                  </Link>
                  <Link to="/comingsoon">
                    <Button variant="outline-light">
                      Download Platty
                    </Button>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </Container>
    </Styles>
  );
};
