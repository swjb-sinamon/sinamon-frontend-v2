import React from 'react';
import styled from '@emotion/styled';
import { Gap } from '../../utils/Gap';

const Box = styled.div`
  width: 200px;
  height: 240px;

  border-radius: 24px;
  background-color: white;

  padding: 1rem 1.4rem;
`;

const DayTitle = styled.h1`
  font-size: 20px;
  color: var(--color-main);
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 160%;
`;

interface TimetableCardProps {
  readonly day: string;
}

const TimetableCard: React.FC<TimetableCardProps> = ({ day, children }) => {
  return (
    <Box>
      <DayTitle>{day}</DayTitle>
      <Gap gap={16} />
      <Content>{children}</Content>
    </Box>
  );
};

export default TimetableCard;
