import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const LoggedContext = React.createContext({
  onLogout: () => {},
  onLogin: () => {},
});

export const LoggedContextProvider = (props) => {
  const navigate = useNavigate();

  // storage에 정보가 있는지 확인해서 페이지 전환
  useEffect(() => {
    const loginInfomationCheck = localStorage.getItem('isLogin');
    if (loginInfomationCheck === 'Y') {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []);

  // login
  const loginHandler = () => {
    localStorage.setItem('isLogin', 'Y');
    navigate('/');
  };

  // logout
  const logoutHandler = () => {
    localStorage.removeItem('isLogin');
  };

  return (
    <LoggedContext.Provider
      value={{
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      <Outlet />
    </LoggedContext.Provider>
  );
};

export default LoggedContext;
