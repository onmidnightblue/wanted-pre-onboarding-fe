import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedComment from './FeedComment';
import LoadingSpinner from '../CommonUI/LoadingSpinner';

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

const Feed = (props) => {
  const [onload, setOnload] = useState(false);

  const loadingHandler = () => {
    setOnload(true);
  };

  return (
    <>
      <Styles.Card style={onload ? { display: 'block' } : { display: 'none' }}>
        <div className="title">
          <h3>{props.username}</h3>
        </div>
        <div className="image">
          <img
            src={props.image}
            alt={props.username}
            onLoad={() => {
              loadingHandler();
            }}
          />
        </div>
        <FeedComment />
      </Styles.Card>
      {!onload && <LoadingSpinner />}
    </>
  );
};

export default Feed;
