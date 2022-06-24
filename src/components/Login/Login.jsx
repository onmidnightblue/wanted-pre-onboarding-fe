import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CheckEmail, CheckPassword } from '../../utils/regex';
import Input from '../CommonUI/Input';
import LoggedContext from '../../store/loggedContext';
import axios from 'axios';

const Styles = {
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
      background-color: #444;
      color: #fff;
      &.invalid {
        background-color: #fafafa;
        color: #000;
      }
    }
  `,
};

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [validEmail, setValidEmail] = useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [validForm, setValidForm] = useState(false);
  const logged = useContext(LoggedContext);

  // validation
  const emailHandler = () => {
    setValidEmail(CheckEmail(emailRef.current.value));
  };
  const passwordHandler = () => {
    setValidPassword(CheckPassword(passwordRef.current.value));
  };

  useEffect(() => {
    if (validEmail && validPassword) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [validEmail, validPassword]);

  // submit
  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const response = await axios.get('/data/USERDATA.json');
      const data = response.data;
      for (const key in data) {
        const existEmailCheck = enteredEmail === data[key].userEmail;
        const rightPasswordCheck = enteredPassword === data[key].userPassword;

        if (!existEmailCheck) {
          alert('please check your email');
        }
        if (existEmailCheck && !rightPasswordCheck) {
          alert('please check your password');
        }
        if (existEmailCheck && rightPasswordCheck) {
          logged.onLogin();
        }
      }
    } catch (error) {
      console.log('error');
    }
  };

  // initial
  const initialClassName = (value) => {
    if (!value === false) {
      return '';
    }
    if (value === false) {
      return 'invalid';
    }
  };

  return (
    <Styles.Form onSubmit={submitHandler}>
      <h1>LOGIN</h1>
      <Input
        ref={emailRef}
        type="text"
        id="email"
        className={initialClassName(validEmail)}
        onChange={emailHandler}
      />
      <Input
        ref={passwordRef}
        type="password"
        id="password"
        className={initialClassName(validPassword)}
        onChange={passwordHandler}
      />
      <button type="submit" className={validForm ? '' : 'invalid'}>
        로그인
      </button>
    </Styles.Form>
  );
};

export default Login;
