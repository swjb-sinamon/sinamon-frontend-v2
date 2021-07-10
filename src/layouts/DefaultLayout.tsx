import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';

const SideBarContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <SideBarContainer>
      <Sidebar />
      {children}
    </SideBarContainer>
  );
};

export default DefaultLayout;
