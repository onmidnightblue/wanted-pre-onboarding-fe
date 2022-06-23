import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage'
import LoggedContext, { LoggedContextProvider } from './store/loggedContext';

function App() {
  return (
    <LoggedContextProvider>
      <Routes>
        <Route index path='/' element={<MainPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </LoggedContextProvider>
      
  )
}

export default App;
