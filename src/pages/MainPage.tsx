import React from 'react';
import styled from '@emotion/styled';
import { faEgg, faFish } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../layouts/DefaultLayout';
import TimetableCard from '../components/TimetableCard';
import { Heading2 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import MoreButton from '../atoms/Button/MoreButton';
import { useMeal } from '../hooks/useMeal';
import { useTimetable } from '../hooks/useTimetable';
import MealCard from '../components/MealCard';
import WeatherCard from '../components/Weather';
import Notice from '../components/Notice';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${makeMediaQuery(Breakpoints.MD)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const MealList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-left: 4rem;
  margin-top: 0.7rem;

  & > * {
    margin-right: 12px;
  }

  & > *:last-child {
    margin-right: 0;
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    margin: 32px 0 0 0;
  }
`;

const TimetableList = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 12px;
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

const WeatherNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const timetableDay = ['월요일', '화요일', '수요일', '목요일', '금요일'];

const MainPage: React.FC = () => {
  const { today, tomorrow } = useMeal();
  const timetable = useTimetable();

  return (
    <>
      <Helmet>
        <title>수정과, 학교를 더 시원하게</title>
      </Helmet>

      <DefaultLayout>
        <TopContainer>
          <WeatherNoticeContainer>
            <WeatherCard />
            <Notice />
          </WeatherNoticeContainer>

          <MealList>
            <MealCard title="오늘 급식" icon={faFish} iconSize="5x">
              {today}
            </MealCard>
            <MealCard title="내일 급식" icon={faEgg} iconSize="4x" iconOffset={10}>
              {tomorrow}
            </MealCard>
          </MealList>
        </TopContainer>

        <Gap gap={32} />

        <ContentHeader>
          <Heading2>이번주 시간표</Heading2>
          <MoreButton to="/timetable" />
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
    </>
  );
};

export default MainPage;
