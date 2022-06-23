import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'

const LoggedContext = React.createContext({
  isLogin: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
})

export const LoggedContextProvider = props => {
  const [isLogin, setIsLogin] = useState(false)

  // 데이터베이스에 사용자의 이메일과 비밀번호가 존재하는지 확인
  console.log(isLogin)

  // storage에 정보가 있는지 확인
  useEffect(() => {
    const loginInfomationCheck = localStorage.getItem('isLogin')
    if (loginInfomationCheck === 'Y') {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  // login
  const loginHandler = useCallback(() => {
    console.log('login')
    localStorage.setItem('isLogin', 'Y')
    setIsLogin(true)
  })

  // logout
  const logoutHandler = useCallback(() => {
    console.log('logout')
    localStorage.removeItem('isLogin')
    setIsLogin(false)
  }, [])

  return (
    <LoggedContext.Provider 
    value={{
      isLogin: isLogin,
      onLogin: loginHandler,
      onLogout: logoutHandler
    }}
  >
    {props.children}
  </LoggedContext.Provider>
  )
}

export default LoggedContext
