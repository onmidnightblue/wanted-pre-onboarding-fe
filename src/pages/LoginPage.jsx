import React from 'react';
import styled from 'styled-components';
import Login from '../components/Login/Login';

const Styles = {
  Wrap: styled.div`
    background-color: #fafafa;
    width: 100%;
    height: 100vh;
  `,
};

const LoginPage = () => {
  return (
    <Styles.Wrap>
      <Login />
    </Styles.Wrap>
  );
};

export default LoginPage;
