import React from 'react';
import styled from '@emotion/styled';
import DefaultLayout from '../layouts/DefaultLayout';
import TimetableCard from '../components/TimetableCard/index';
import { Heading2 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { useTimetable } from '../hooks/useTimetable';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';

const Box = styled.div`
  width: 1100px;

  border-radius: 24px;
  background-color: white;

  padding: 1rem 1.4rem;
`;

const Text = styled.div`
  color : var(--color-subtext);
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

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const timetableDay = ['월요일', '화요일', '수요일', '목요일', '금요일'];

const Timetablepage: React.FC = () => {
  const timetable = useTimetable();

  return (
    <DefaultLayout>

      <ContentHeader>
        <Heading2>이번주 시간표</Heading2>
      </ContentHeader>

      <Gap gap={8} />

      <Box>
        <TimetableList>
          {timetable.map((todayTime, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TimetableCard key={`timetable-${index}`} day={timetableDay[index]}>
              {todayTime.map((time, j) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={`timeitem-${index}${j}`}>
                  {time.subject}
                  <br />
                </React.Fragment>
              ))}
            </TimetableCard>
          ))}
        </TimetableList>
      </Box>

      <Text>* 수정과에서는 시간표 오류에 따른 책임을 지지 않습니다.</Text>
      <Text>* 4시간 주기로 시간표를 새로고침합니다.</Text>
    </DefaultLayout>
  );
};

export default Timetablepage;
