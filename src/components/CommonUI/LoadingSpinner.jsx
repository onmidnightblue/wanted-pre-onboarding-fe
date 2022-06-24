import React from 'react';
import styled from 'styled-components';
import { SiApacheairflow } from 'react-icons/si';

const Styles = {
  Wrap: styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  `,
  Rotate: styled.div`
    animation: rotate 1.5s linear infinite;
    display: inline-block;
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};

const LoadingSpinner = () => {
  return (
    <Styles.Wrap>
      <Styles.Rotate>
        <SiApacheairflow size={20} />
      </Styles.Rotate>
    </Styles.Wrap>
  );
};

export default LoadingSpinner;
