import React from 'react';
import styled from '@emotion/styled';
import { faEgg, faFish } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '../layouts/DefaultLayout';
import TimetableCard from '../components/TimetableCard';
import { Heading2 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import Background from '../components/Background';
import MoreButton from '../atoms/Button/MoreButton';
import { useMeal } from '../hooks/useMeal';
import { useTimetable } from '../hooks/useTimetable';
import MealCard from '../components/MealCard';

const TimetableList = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 12px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const timetableDay = ['월요일', '화요일', '수요일', '목요일', '금요일'];

const MainPage: React.FC = () => {
  const { today, tomorrow } = useMeal();
  const timetable = useTimetable();

  return (
    <DefaultLayout>
      <Background />

      <TimetableList>
        <MealCard title="오늘 급식" icon={faFish} iconSize="5x">
          {today}
        </MealCard>
        <MealCard title="내일 급식" icon={faEgg} iconSize="4x" iconOffset={10}>
          {tomorrow}
        </MealCard>
      </TimetableList>

      <Gap gap={32} />

      <ContentHeader>
        <Heading2>이번주 시간표</Heading2>
        <MoreButton to="/" />
      </ContentHeader>
      <Gap gap={8} />
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
    </DefaultLayout>
  );
};

export default MainPage;
