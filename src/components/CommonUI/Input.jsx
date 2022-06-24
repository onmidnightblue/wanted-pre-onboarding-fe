import React from 'react';
import styled from 'styled-components';

const Styles = {
  Input: styled.div`
    margin-bottom: 10px;
    label {
      display: inline-block;
      margin-bottom: 10px;
    }
    input {
      width: 100%;
      border: 1px solid #eee;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 6px;
      &.invalid {
        border: 1px solid #a51a1a;
      }
    }
  `
};

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  return (
    <Styles.Input>
      <label 
        htmlFor={props.id}>{props.id}</label>
      <input 
        ref={ref} {...props}
      />
    </Styles.Input>
  );
});

export default Input;
