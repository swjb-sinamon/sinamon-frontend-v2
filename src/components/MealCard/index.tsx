import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Heading3 } from '../../atoms/Typography/Heading';
import { Gap } from '../../utils/Gap';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';

const Box = styled.div`
  position: relative;

  width: 190px;
  height: 240px;

  background-color: white;

  padding: 1.4rem 1.4rem;

  & > div {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    width: 150px;
  }
`;

const StyledTitle = styled(Heading3)`
  color: var(--color-main);
`;

const BackIcon = styled.div<{ offset?: number }>`
  position: absolute;
  user-select: none;

  right: 14px;
  bottom: ${(props) => props.offset || 0}px;
  opacity: 0.12;
`;

const Content = styled.p`
  font-size: 14px;
  word-break: keep-all;
`;

interface MealCardProps {
  readonly title: string;
  readonly icon: IconProp;
  readonly iconSize: SizeProp;
  readonly iconOffset?: number;
}

const MealCard: React.FC<MealCardProps> = ({ title, iconSize, icon, iconOffset, children }) => {
  return (
    <Box>
      <BackIcon offset={iconOffset}>
        <FontAwesomeIcon icon={icon} size={iconSize} />
      </BackIcon>

      <div>
        <StyledTitle>{title}</StyledTitle>
        <Gap gap={16} />
        <Content>{children}</Content>
      </div>
    </Box>
  );
};

export default MealCard;
