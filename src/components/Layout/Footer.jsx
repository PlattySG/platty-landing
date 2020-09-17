import React from 'react';
import { Container } from 'react-bootstrap';
import { size } from '../../common/styles/index';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div
          className="row justify-content-center"
          style={{ padding: `${size(2)}px 0` }}
        >
          <div className="col-auto">
            <p className="mb-0">Copyright &copy; 2020 Platty</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
