import React, { useRef } from 'react';
import styled from 'styled-components';

const Styles = {
  CommentForm: styled.form`
  width: 100%;
  padding: 10px 0;
  input {
    background-color: #eee;
    width: calc(70% - 4px);
    border-radius: 10px;
    padding: 6px;
    margin-right: 4px;
  }
  button {
    width: 30%;
    border-radius: 10px;
    padding: 6px;
    cursor: pointer;
  }
  `
}

const FeedCommentForm = (props) => {
  const commentRef = useRef('')

  const submitHandler = event => {
    event.preventDefault()

    const commentData = {
      id: Math.random().toString(),
      content: commentRef.current.value
    }

    props.addComment(commentData)
    commentRef.current.value = ''
  }

  return (
    <Styles.CommentForm onSubmit={submitHandler}>
    <input 
      ref={commentRef}
      type={'text'} 
    />
    <button type='submit'>add</button>
  </Styles.CommentForm>
  );
};

export default FeedCommentForm;
