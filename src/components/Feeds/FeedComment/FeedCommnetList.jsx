import React from 'react';
import styled from 'styled-components';

const Styles = {
  CommentList: styled.div`
    width: 100%;
    padding: 10px 0;
    span {
      font-size: 10px;
      font-weight: bold;
    }
    ul {
      li {
        font-size: 14px;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  `,
};

const FeedCommnetList = (props) => {
  const datas = props.datas;
  let comment;

  if (datas.length === 0) {
    comment = (
      <span>
        Comments do not exist. <br />
        please enter your comment.
      </span>
    );
  }
  if (datas.length > 0) {
    comment = (
      <ul>
        {props.datas.map((data) => (
          <li key={data.id}>
            <span>comment</span> {data.content}
          </li>
        ))}
      </ul>
    );
  }

  return <Styles.CommentList>{comment}</Styles.CommentList>;
};

export default FeedCommnetList;
