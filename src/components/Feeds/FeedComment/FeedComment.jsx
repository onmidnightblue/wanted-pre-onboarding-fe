import React from 'react';
import { useState } from 'react';
import FeedCommentForm from './FeedCommentForm';
import FeedCommnetList from './FeedCommnetList';

const FeedComment = () => {
  const [commentData, setCommentData] = useState([])
  const addCommentHandler = (data) => {
    const newCommentData = [...commentData, data]
    setCommentData(newCommentData)
  }

  return (
    <>
      <FeedCommnetList datas={commentData}/>
      <FeedCommentForm addComment={addCommentHandler}/>
    </>
  );
};

export default FeedComment;
