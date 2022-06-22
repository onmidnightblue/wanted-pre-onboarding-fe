import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';

const Styles = {
  Wrap: styled.div`
    width: 100%;
    height: 3000px;
    background-color: #fafafa;
  `
}

const Main = () => {
  return (
    <Styles.Wrap>
      <Header />
    </Styles.Wrap>
  );
};

export default Main;
