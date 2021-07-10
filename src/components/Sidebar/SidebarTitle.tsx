import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Gap } from '../../utils/Gap';

const TitleItem = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-button-hover);
  }
`;

const LogoText = styled.p`
  font-family: var(--font-logo), 'sans-serif';
  font-size: 24px;
`;

const Information = styled.p`
  font-family: 'NanumSquareRound', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

const ProfileText = styled(Link)`
  font-size: 14px;
  color: var(--color-subtext);
`;

const SidebarTitle: React.FC = () => {
  return (
    <TitleItem>
      <LogoContainer>
        <img src={Logo} alt="수정과" width={60} height={60} />
        <LogoText>수정과</LogoText>
      </LogoContainer>
      <Gap gap={24} />
      <Information>
        3학년 9반 홍길동 님
        <Gap gap={8} />
        <ProfileText to="/">프로필 수정</ProfileText>
      </Information>
    </TitleItem>
  );
};

export default SidebarTitle;
