/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { size } from '../../common/styles';
import { useGoogleSheets } from '../../common/hooks/useGoogleSheets';

const Styles = styled.div`
  min-height: calc(100vh - ${size(10)}px - ${size(7)}px);
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};

  .btm-text {
    margin-bottom: ${size(2)}px;
  }

  .verical-padding {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContactContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Interested User');
  const [message, setMessage] = useState('');
  const [inputErrorMessageName, setInputErrorMessageName] = useState(
    '',
  );
  const [
    inputErrorMessageEmail,
    setInputErrorMessageEmail,
  ] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { appendSpreadsheet } = useGoogleSheets();

  const checkValid = () => {
    const nameTrimmed = name.trim();
    const emailTrimmed = email.trim();

    setInputErrorMessageName('');
    setInputErrorMessageEmail('');

    if (!nameTrimmed || nameTrimmed === '') {
      setInputErrorMessageName('Name must not be blank.');
      return false;
    }

    if (!emailTrimmed || emailTrimmed === '') {
      setInputErrorMessageEmail('Email must not be blank.');
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!checkValid()) {
        setIsLoading(false);
        return;
      }
      await appendSpreadsheet({
        name,
        email,
        type,
        message,
      });
      toast.success('🦄 Message sucessfully sent!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error(
        <p>
          <span role="img" aria-label="error">
            ❌
          </span>{' '}
          An Error has occured please contact us through{' '}
          <a href="mailto:pereira.yip@u.nus.edu">email</a> instead!
        </p>,
        {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
      console.error(error); // eslint-disable-line no-console
    }
    setIsLoading(false);
  };

  return (
    <Styles>
      <Container>
        <Row style={{ minHeight: '80vh' }}>
          <Col xs={12} md={4} className="verical-padding">
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={inputErrorMessageName}
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrorMessageName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={inputErrorMessageEmail}
                />
                <Form.Control.Feedback type="invalid">
                  {inputErrorMessageEmail}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Interested User</option>
                  <option>Entertainment Service</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Leave us a message!</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="outline-light"
                type="submit"
                disabled={isLoading}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </>
                ) : (
                  `I'm Excited`
                )}
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={8} className="verical-padding">
            <h1 className="btm-text">Why work with us?</h1>
            <p className="btm-text">
              Platty helps fill up spare capacity and drive traffic to
              the businesses by creating awareness and attractiveness
              for our partners.
            </p>
            <p className="btm-text">
              Users can save time when making a reservation as
              entertainment services are collated and available time
              slots are easily found. With discounts up to 50% off
              everyday, consumers can save money on activities they
              enjoy.
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};
