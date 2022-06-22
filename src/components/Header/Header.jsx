import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { WiDaySunny } from 'react-icons/wi'

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
  return (
    <Styles.Header>
      <Styles.Wrap>
        <div>
          <WiDaySunny size={24}/>
        </div>
        <input />
        <div>
          <RiLogoutBoxRLine size={18}/>
        </div>
      </Styles.Wrap>
    </Styles.Header>
  );
};

export default Header;
