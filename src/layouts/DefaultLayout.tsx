import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';

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

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <SideBarContainer>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </SideBarContainer>
  );
};

export default DefaultLayout;
