import React, { HTMLProps } from 'react';
import styled from '@emotion/styled';
import { Gap } from '../../utils/Gap';
import { Heading3 } from '../../atoms/Typography/Heading';

const Box = styled.div`
  width: 200px;
  height: 240px;

  border-radius: 24px;
  background-color: white;

  padding: 1rem 1.4rem;
`;

const DayTitle = styled(Heading3)`
  color: var(--color-main);
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 160%;
`;

interface TimetableCardProps {
  readonly day: string;
}

const TimetableCard: React.FC<TimetableCardProps & HTMLProps<HTMLDivElement>> = ({ day, children, className }) => {
  return (
    <Box className={className}>
      <DayTitle>{day}</DayTitle>
      <Gap gap={16} />
      <Content>{children}</Content>
    </Box>
  );
};

export default TimetableCard;
