import React from 'react';
import styled from '@emotion/styled';
import { Link, LinkProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const StyledButton = styled(Link)`
  font-size: 14px;
  color: var(--color-subtext);
  cursor: pointer;

  margin-left: 8px;
`;

interface MoreButtonProps {
  readonly to: string;
}

const MoreButton: React.FC<LinkProps & MoreButtonProps> = ({ to, ...props }) => {
  return (
    <StyledButton to={to} {...props}>
      <FontAwesomeIcon icon={faSearch} /> 더보기
    </StyledButton>
  );
};

export default MoreButton;
