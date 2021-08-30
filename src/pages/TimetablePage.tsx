import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../layouts/DefaultLayout';
import TimetableCard from '../components/TimetableCard';
import { Heading2 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { useTimetable } from '../hooks/useTimetable';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';
import Emoji from '../atoms/Emoji';

const Box = styled.div`
  border-radius: 24px;
  background-color: white;

  padding: 1rem 1.4rem;
`;

const Label = styled.p`
  color: var(--color-subtext);
`;

const FullTimetableCard = styled(TimetableCard)`
  height: 100%;
`;

const TimetableList = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 12px;
    margin-left: 10px;
  }

  & > *:last-child {
    margin-right: 0;
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    flex-direction: column;
    align-items: center;

    & > * {
      margin-right: 0;
      margin-bottom: 12px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
`;

const timetableDay = ['월요일', '화요일', '수요일', '목요일', '금요일'];

const TimetablePage: React.FC = () => {
  const timetable = useTimetable();

  return (
    <>
      <Helmet>
        <title>시간표 - 수정과</title>
      </Helmet>

      <DefaultLayout>
        <Heading2>
          <Emoji label="books" symbol="📚" /> 이번주 시간표
        </Heading2>

        <Gap gap={32} />

        <Box>
          <TimetableList>
            {timetable.map((todayTime, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <FullTimetableCard key={`timetable-${index}`} day={timetableDay[index]}>
                {todayTime.map((time, j) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <React.Fragment key={`timeitem-${index}${j}`}>
                    {time.subject}
                    <br />
                    {time.teacher}
                    <Gap gap={8} />
                  </React.Fragment>
                ))}
              </FullTimetableCard>
            ))}
          </TimetableList>
        </Box>

        <Gap gap={8} />

        <Label>* 수정과에서는 시간표 오류에 따른 책임을 지지 않습니다.</Label>
        <Label>* 4시간 주기로 시간표를 새로고침합니다.</Label>
      </DefaultLayout>
    </>
  );
};

export default TimetablePage;
