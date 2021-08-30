import React, { useState } from 'react';
import styled from '@emotion/styled';
import { faSchool, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SidebarTitle from './SidebarTitle';
import SidebarItem from './SidebarItem';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';
import Api from '../../apis';
import { AdminPageList, PageList } from '../../stores/PageList';

const StyledSidebar = styled.div`
  min-height: 100vh;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${makeMediaQuery(Breakpoints.MD)} {
    min-height: 100%;
  }
`;

const SidebarList = styled.div<{ open?: boolean }>`
  & > * {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;

const SidebarLink = styled(Link)`
  display: block;
  text-decoration: none !important;
`;

const BottomMenu = styled.p`
  color: var(--color-subtext);
  font-size: 14px;
  text-align: center;
  margin-bottom: 1rem !important;
`;

interface SidebarProps {
  readonly isAdminPage?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isAdminPage }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const onLogoutClick = () => {
    // TODO: SweetAlert으로 대체
    // eslint-disable-next-line no-restricted-globals,no-alert
    const isLogout = confirm('정말로 로그아웃 할까요?');

    if (!isLogout) return;

    Api.delete('/auth/logout').then(() => window.location.reload());
  };

  const Page = isAdminPage ? AdminPageList : PageList;

  return (
    <StyledSidebar>
      <SidebarTitle setOpen={setOpen} />

      <SidebarList open={isOpen}>
        {Page.map(
          (page) =>
            !page.onlyRouter && (
              <SidebarLink to={page.path} key={`sidebar${page.name}`}>
                <SidebarItem icon={page.icon || faSchool}>{page.name}</SidebarItem>
              </SidebarLink>
            )
        )}

        <SidebarItem icon={faSignOutAlt} tabIndex={0} onClick={onLogoutClick}>
          로그아웃
        </SidebarItem>

        <a
          href="https://github.com/swjb-sinamon"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'block', textDecoration: 'none' }}
        >
          <SidebarItem icon={faGithub}>GitHub</SidebarItem>
        </a>

        <BottomMenu>
          <Link to="/privacy">개인정보처리방침</Link> / <Link to="/tos">이용약관</Link>
          <br />
          <Link to="/admin">어드민</Link>
        </BottomMenu>
      </SidebarList>
    </StyledSidebar>
  );
};

export default Sidebar;
