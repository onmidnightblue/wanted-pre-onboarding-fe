import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoggedContext from '../store/loggedContext';
import { CheckEmail, CheckPassword } from '../utils/regex';
import Input from '../components/UI/Input';

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
      background-color: #444;
      color: #fff;
      &.invalid {
        background-color: #fafafa;
        color: #000;
      }
    }
  `
}

const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [validEmail, setValidEmail] = useState(null)
  const [validPassword, setValidPassword] = useState(null)
  const [validForm, setValidForm] = useState(false)
  const logged = useContext(LoggedContext)
  const navigate = useNavigate()

  // validation
  const emailHandler = () => {
    setValidEmail(CheckEmail(emailRef.current.value))
  }
  const passwordHandler = () => {
    setValidPassword(CheckPassword(passwordRef.current.value))
  }

  useEffect(() => {
    const vaildComplete = setTimeout(() => {
      if (validEmail && validPassword) {
        setValidForm(true)
        console.log('complete')
      }
    }, 500)
    return () => {
      clearTimeout(vaildComplete)
    }
  }, [validEmail, validPassword])

  // submit
  const submitHandler = (event) => {
    event.preventDefault()

    if (validForm) {
      logged.onLogin(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    }
  }

  // initial
  const initialClassName = (value) => {
    if (value || null) {
      return ''
    }
    if (value === false) {
      return 'invalid'
    }
  }

  return (
    <Styles.Wrap onSubmit={submitHandler}>
      <Styles.Form>
        <h1>LOGIN</h1>
          <Input
            ref={emailRef}
            type='text'
            id='email'
            className={initialClassName(validEmail)}
            onChange={emailHandler} />
          <Input
            ref={passwordRef}
            type='password'
            id='password'
            className={initialClassName(validPassword)}
            onChange={passwordHandler} />
          <button 
            type='submit'
            className={validForm ? '' : 'invalid'}
          >로그인</button>
      </Styles.Form>
    </Styles.Wrap>
  );
};

export default LoginPage;
