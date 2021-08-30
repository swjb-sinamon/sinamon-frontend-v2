import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';
import Background from '../components/Background';

const SideBarContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;

  ${makeMediaQuery(Breakpoints.MD)} {
    display: block;
  }
`;

const MainContent = styled.div`
  padding: 3rem 2.4rem;

  ${makeMediaQuery(Breakpoints.MD)} {
    padding: 1.2rem;
  }
`;

interface DefaultLayoutProps {
  readonly isAdmin?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ isAdmin, children }) => {
  return (
    <SideBarContainer>
      <Sidebar isAdminPage={isAdmin} />
      <MainContent>
        <Background />
        {children}
      </MainContent>
    </SideBarContainer>
  );
};

export default DefaultLayout;
