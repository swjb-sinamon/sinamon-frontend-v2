import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../layouts/DefaultLayout';
import { Heading2, Heading3 } from '../atoms/Typography/Heading';
import Api from '../apis';
import { Gap } from '../utils/Gap';
import CalendarCard from '../components/CalendarCard';
import Emoji from '../atoms/Emoji';

const CardList = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 16px;
  }
`;

const Highlight = styled.span`
  color: var(--color-main);
`;

const now = new Date();
const DAY_NAME = ['월요일', '화요일', '수요일', '목요일', '금요일'];
const HEADER_DAY_NAME = ['일요일', ...DAY_NAME, '토요일'];
const MONTH_DATE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CalendarPage: React.FC = () => {
  const [calendar, setCalendar] = useState<string[]>(['', '', '', '', '']);

  useEffect(() => {
    Api.get('/school/calendar').then((res) => setCalendar(res.data.data));
  }, []);

  const getDateByWeekday = useCallback((weekIndex: number) => {
    const date = now.getDate() + (weekIndex + 1 - now.getDay());

    if (date > MONTH_DATE[now.getMonth()]) {
      return date - MONTH_DATE[now.getMonth()];
    }

    return date;
  }, []);

  return (
    <>
      <Helmet>
        <title>학사일정 - 수정과</title>
      </Helmet>

      <DefaultLayout>
        <Heading2>
          <Emoji label="calendar" symbol="📆" /> 학사일정
        </Heading2>

        <Gap gap={32} />

        <Heading3>
          오늘은 <Highlight>{`${now.getMonth() + 1}월 ${now.getDate()}일 ${HEADER_DAY_NAME[now.getDay()]}`}</Highlight>{' '}
          입니다.
        </Heading3>

        <Gap gap={16} />

        <CardList>
          {DAY_NAME.map((day, index) => {
            const date = getDateByWeekday(index);
            return (
              <CalendarCard key={day} day={day} date={date} isToday={date === now.getDate()}>
                {calendar[index] || '일정이 없습니다.'}
              </CalendarCard>
            );
          })}
        </CardList>
      </DefaultLayout>
    </>
  );
};

export default CalendarPage;
