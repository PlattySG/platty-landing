import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WrappedToastContainer = ({ className, ...rest }) => (
  <div className={className}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <ToastContainer {...rest} />
  </div>
);

export default styled(WrappedToastContainer).attrs({
  // custom props
  position: 'bottom-left',
  autoClose: 50000000000000000000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    border-radius: 8px;
  }
  .Toastify__toast--error {
    background-color: #ff6961;
    color: #ffffff;
  }
  .Toastify__toast--success {
    background-color: #fddfab;
    color: #373f63;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
