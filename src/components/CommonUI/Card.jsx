import React from 'react';
import styled from 'styled-components';

const Styles = {
  Card: styled.div`
    border: 1px solid #eee;
    border-radius: 2px;
    background-color: #fff;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .title {
      width: 100%;
      padding-bottom: 10px;
      h3 {
        font-weight: bold;
      }
    }
    .image {
      width: 100%;
      margin: 10px 0;
      img {
        max-width: 100%;
      }
    }
  `,
};

const Card = (props) => {
  return <Styles.Card {...props}>{props.children}</Styles.Card>;
};

export default Card;
