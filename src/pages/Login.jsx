import React, { useState, useContext, useReducer, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import loggedContext from '../store/loggedContext';


const Styles = {
  Wrap: styled.div`
    background-color: #fafafa;
    width: 100%;
    height: 100vh;
  `,
  Form: styled.form`
    width: 400px;
    padding: 40px;
    border: 1px solid #eee;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
      padding: 10px 0;
      border: 1px solid #eee;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;
    }
  `,
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
        background-color: #a51a1a;
      }
    }
  `
}

  // email에 @와 .이 포함되는지 확인
  // const regex =  /[@.]/gi
  // password에 대문자, 숫자, 특수문자, 8자리 이상
  // const regex =  /(?=.*?[A-Z])(?=.*?[0-9])(?=.*[~!@#$%^&*()+|=]).{8,}$/gi
const emailReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  return { value: '', isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', isValid: null
  })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', isValid: null
  })
  const [validForm, setFormIsValid] = useState(false)
  const logged = useContext(loggedContext)
  const navigate = useNavigate()

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  // 사용자가 입력중일 때 500ms 뒤에 form 검증
  useEffect(() => {
    const entering = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(entering);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'INPUT', val: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'INPUT', val: event.target.value });
  };



  // submit
  const submitHandler = (event) => {
    event.preventDefault()

    if (validForm) {
      logged.onLogin()
      navigate('/main')
    }
    if (!validEmail) {
      console.log('email fail')
    }
    if (!validPassword) {
      console.log('password fail')
    }
  }

  return (
    <Styles.Wrap onSubmit={submitHandler}>
      <Styles.Form>
        <h1>LOGIN</h1>
          <Styles.Input>
            <label>이메일</label>
            <input
              ref={emailRef}
              type='text'
              id='email'
              onChange={emailChangeHandler}
            />
          </Styles.Input>
          <Styles.Input>
            <label>비밀번호</label>
            <input
              ref={passwordRef}
              type='password'
              id='password'
              onChange={passwordChangeHandler}
            />
          </Styles.Input>
          <button type='submit'>로그인</button>
      </Styles.Form>
    </Styles.Wrap>
  );
};

export default Login;
