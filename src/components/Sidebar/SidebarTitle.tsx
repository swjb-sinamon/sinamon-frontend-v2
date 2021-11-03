import React, { Dispatch, SetStateAction, useMemo } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png';
import { Gap } from '../../utils/Gap';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';
import useWindowSize from '../../hooks/useWIndowSize';
import { useProfile } from '../../hooks/useProfile';
import useDesktop from '../../hooks/useDesktop';

const TitleItem = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  ${makeMediaQuery(Breakpoints.MD)} {
    height: 58px;
    flex-direction: row;
    justify-content: space-around;
  }
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

  ${makeMediaQuery(Breakpoints.MD)} {
    flex-direction: row;

    & > img {
      width: 32px;
      height: 32px;
    }
  }
`;

const LogoText = styled.p`
  font-family: var(--font-logo), 'sans-serif';
  font-size: 24px;

  ${makeMediaQuery(Breakpoints.MD)} {
    font-size: 18px;
  }
`;

const Information = styled.div`
  font-family: 'NanumSquareRound', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  ${makeMediaQuery(Breakpoints.MD)} {
    font-size: 14px;
  }
`;

const ProfileText = styled(Link)`
  font-size: 14px;
  color: var(--color-subtext);

  ${makeMediaQuery(Breakpoints.MD)} {
    display: none;
  }
`;

const MobileRightMenu = styled.div`
  ${makeMediaQuery(Breakpoints.MD)} {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-right: 16px;
    }

    & > *:last-child {
      margin-right: 0;
    }
  }
`;

const MenuOpenButtton = styled.div`
  cursor: pointer;

  &:hover {
    color: var(--color-button-hover);
  }
`;

interface SidebarTitleProps {
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarTitle: React.FC<SidebarTitleProps> = ({ setOpen }) => {
  const isDesktop = useDesktop();
  const profile = useProfile();
  const profileText = isDesktop ? (
    `${profile?.studentGrade}학년 ${profile?.studentClass}반 ${profile?.name} 님`
  ) : (
    <Link to="/me">{`${profile?.name} 님`}</Link>
  );

  return (
    <TitleItem>
      <Link
        to="/"
        style={{
          textDecoration: 'none'
        }}
      >
        <LogoContainer>
          <img src={Logo} alt="수정과" width={60} height={60} />
          <LogoText>수정과</LogoText>
        </LogoContainer>
      </Link>

      <Gap gap={24} />

      <MobileRightMenu>
        <Information>
          {profileText}
          {isDesktop && <Gap gap={8} />}
          <ProfileText to="/me">프로필 수정</ProfileText>
        </Information>

        {!isDesktop && (
          <MenuOpenButtton onClick={() => setOpen((v) => !v)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </MenuOpenButtton>
        )}
      </MobileRightMenu>
    </TitleItem>
  );
};

export default SidebarTitle;
