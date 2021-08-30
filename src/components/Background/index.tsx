import React from 'react';
import styled from '@emotion/styled';
import Image from '../../assets/logo.png';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';

const StyledBackground = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: -10;
  user-select: none;

  & > div {
    width: 100%;
    height: 100%;

    opacity: 0.04;
    background: linear-gradient(to left, #4568dc, #b06ab3);
  }

  & > img {
    position: absolute;
    right: 100px;
    bottom: 40px;

    width: 440px;

    opacity: 0.08;
    transform: rotate(-25deg);

    ${makeMediaQuery(Breakpoints.MD)} {
      display: none;
    }
  }
`;

const Background: React.FC = () => {
  return (
    <StyledBackground>
      <div />
      <img src={Image} alt="수정과 로고 배경" />
    </StyledBackground>
  );
};

export default Background;
