import React from 'react';
import styled from 'styled-components';
import { IoIosReturnRight } from 'react-icons/io';

const Styles = {
  CommentList: styled.div`
  width: 100%;
  padding: 10px 0;
  ul {
    li {
      font-size: 14px;
    }
  }
`
}

const FeedCommnetList = (props) => {
  return (
    <Styles.CommentList>
    <ul>
      {props.datas.map((data) => (
        <li
          key={data.id}
        >
          <IoIosReturnRight size={16}/>{data.content}
        </li>
      ))}
    </ul>
  </Styles.CommentList>
  );
};

export default FeedCommnetList;
