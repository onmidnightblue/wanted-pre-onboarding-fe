import React from 'react';
import styled from 'styled-components';
import FeedComment from './FeedComment';

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
  `
}

const Feed = (props) => {
  return (
    <Styles.Card>
      <div className='title'>
        <h3>{props.username}</h3>
      </div>
      <div className='image'>
        <img src={props.image} />
      </div>
      <FeedComment />
    </Styles.Card>
  );
};

export default Feed;
