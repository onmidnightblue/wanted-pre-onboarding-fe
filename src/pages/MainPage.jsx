import React from 'react';
import styled from 'styled-components';
import Feeds from '../components/Feeds/Feeds';
import Header from '../components/Header/Header';

const Styles = {
  Wrap: styled.div`
    width: 100%;
    background-color: #fafafa;
  `,
};

const MainPage = () => {
  return (
    <Styles.Wrap>
      <Header />
      <Feeds />
    </Styles.Wrap>
  );
};

export default MainPage;
