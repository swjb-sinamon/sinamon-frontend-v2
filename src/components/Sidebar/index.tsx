import React from 'react';
import styled from '@emotion/styled';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import SidebarTitle from './SidebarTitle';
import SidebarItem from './SidebarItem';

const StyledSidebar = styled.div`
  min-height: 100vh;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <SidebarTitle />

      <div>
        <SidebarItem icon={faStickyNote}>가나다</SidebarItem>
        <SidebarItem icon={faStickyNote}>가나다</SidebarItem>
        <SidebarItem icon={faStickyNote}>가나다</SidebarItem>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
