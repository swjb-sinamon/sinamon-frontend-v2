import React from 'react';
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

const StyledHeading = styled(Heading3)<{ isToday?: boolean }>`
  ${(props) => (props.isToday ? 'color: var(--color-main);' : '')}
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 160%;
`;

const DateText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--color-subtext);

  &:after {
    content: '일';
  }
`;

interface CalendarCardProps {
  readonly day: string;
  readonly date: number;
  readonly isToday?: boolean;
}

const CalendarCard: React.FC<CalendarCardProps> = ({ day, date, isToday, children }) => {
  return (
    <Box>
      <StyledHeading isToday={isToday}>
        {day}
        <DateText> {date}</DateText>
      </StyledHeading>
      <Gap gap={16} />
      <Content>{children}</Content>
    </Box>
  );
};

export default CalendarCard;
