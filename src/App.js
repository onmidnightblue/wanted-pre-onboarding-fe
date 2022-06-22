import React from 'react';
import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import loggedContext from './store/loggedContext';

function App() {
  const isLogin = useContext(loggedContext)

  return (
    <Routes>
      <Route index path='/' element={<Navigate replace to='/login' />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/main' element={<Main />}/>
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App;
