import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const StyledItem = styled.div`
  display: flex;
  align-items: center;

  width: 250px;
  height: 46px;

  border-radius: 8px;

  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: white;
    background-color: var(--color-button);
  }

  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SideBarIconWrapper = styled.div`
  min-width: 28px;
  max-height: 22px;

  margin-right: 20px;
  margin-left: 24px;
`;

interface StyledItemProps {
  readonly icon: IconProp;
}

const SidebarItem: React.FC<HTMLAttributes<HTMLDivElement> & StyledItemProps> = ({ icon, children, ...props }) => {
  return (
    <StyledItem {...props}>
      <SideBarIconWrapper>
        <FontAwesomeIcon icon={icon} />
      </SideBarIconWrapper>
      {children}
    </StyledItem>
  );
};

export default SidebarItem;
