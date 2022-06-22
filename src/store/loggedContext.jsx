import React, { useEffect, useState } from 'react'

const loggedContext = React.createContext({
  isLogin: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
})

export const loggedProvider = props => {
  const [isLogin, setIsLogin] = useState(false)

  // storage에 정보가 있는지 확인
  useEffect(() => {
    const loginInfomationCheck = localStorage.getItem('isLogin')
    if (loginInfomationCheck === 'Y') {
      setIsLogin(true)
    }
  }, [])

  // login
  const loginHandler = () => {
    localStorage.setItem('isLogin', 'Y')
    setIsLogin(true)
  }

  // logout
  const logoutHandler = () => {
    localStorage.removeItem('isLogin')
    setIsLogin(false)
  }

  return (
    <loggedContext.Provider 
    value={{
      isLogin: isLogin,
      onLogin: loginHandler,
      onLogout: logoutHandler
    }}
  >
    {props.children}
  </loggedContext.Provider>
  )
}

export default loggedContext
