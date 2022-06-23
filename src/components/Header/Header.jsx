import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { WiDaySunny } from 'react-icons/wi'
import { Link, useNavigate } from 'react-router-dom';
import LoggedContext from '../../store/loggedContext';

const Styles = {
  Header: styled.header`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
  `,
  Wrap: styled.div`
    width: 600px;
    padding: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      cursor: pointer;
    }
    input {
      background-color: #eee;
      padding: 6px;
      border-radius: 6px;
    }
    @media screen and (max-width: 640px) {
      input {
        display: none;
      }
    }
  `
}

const Header = () => {
  const navigate = useNavigate()
  const logged = useContext(LoggedContext)

  const logoutHandler = () => {
    logged.onLogout()
    navigate('/login')
  }

  return (
    <Styles.Header>
      <Styles.Wrap>
        <div>
          <Link to='/main'>
            <WiDaySunny size={24}/>
          </Link>
        </div>
        <input />
        <div onClick={logoutHandler}>
          <RiLogoutBoxRLine size={18}/>
        </div>
      </Styles.Wrap>
    </Styles.Header>
  );
};

export default Header;
