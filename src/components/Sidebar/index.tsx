import React, { useState } from 'react';
import styled from '@emotion/styled';
import { faSchool, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SidebarTitle from './SidebarTitle';
import SidebarItem from './SidebarItem';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';
import Api from '../../apis';
import { PageList } from '../../stores/PageList';

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

const Sidebar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const onLogoutClick = () => {
    // TODO: SweetAlert으로 대체
    // eslint-disable-next-line no-restricted-globals,no-alert
    const isLogout = confirm('정말로 로그아웃 할까요?');

    if (!isLogout) return;

    Api.delete('/auth/logout').then(() => window.location.reload());
  };

  return (
    <StyledSidebar>
      <SidebarTitle setOpen={setOpen} />

      <SidebarList open={isOpen}>
        {PageList.map(
          (page) =>
            !page.onlyRouter && (
              <SidebarLink to={page.path}>
                <SidebarItem icon={page.icon || faSchool}>{page.name}</SidebarItem>
              </SidebarLink>
            )
        )}

        <SidebarItem icon={faSignOutAlt} tabIndex={0} onClick={onLogoutClick}>
          로그아웃
        </SidebarItem>
      </SidebarList>
    </StyledSidebar>
  );
};

export default Sidebar;
