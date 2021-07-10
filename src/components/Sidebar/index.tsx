import React, { useState } from 'react';
import styled from '@emotion/styled';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import SidebarTitle from './SidebarTitle';
import SidebarItem from './SidebarItem';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';

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
  ${makeMediaQuery(Breakpoints.MD)} {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;

const Sidebar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <StyledSidebar>
      <SidebarTitle setOpen={setOpen} />

      <SidebarList open={isOpen}>
        <SidebarItem icon={faStickyNote}>가나다</SidebarItem>
        <SidebarItem icon={faStickyNote}>가나다</SidebarItem>
        <SidebarItem icon={faStickyNote}>가나다</SidebarItem>
      </SidebarList>
    </StyledSidebar>
  );
};

export default Sidebar;
