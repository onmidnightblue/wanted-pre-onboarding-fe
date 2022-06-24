import React, { useState } from 'react';
import Card from '../CommonUI/Card';
import FeedComment from './FeedComment/FeedComment';
import LoadingSpinner from '../CommonUI/LoadingSpinner';

const Feed = (props) => {
  const [onload, setOnload] = useState(false);

  const loadingHandler = () => {
    setOnload(true);
  };

  return (
    <>
      <Card style={onload ? { display: 'block' } : { display: 'none' }}>
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
      </Card>
      {!onload && <LoadingSpinner />}
    </>
  );
};

export default Feed;
