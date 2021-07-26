import React from 'react';
import styled from '@emotion/styled';
import DefaultLayout from '../layouts/DefaultLayout';
import WeatherCard from '../components/Weather';
import Notice from '../components/Notice';

const WeatherNoticeContainer = styled.div`
  width: 380px;

  display: flex;
  flex-direction: column;
`;

const MainPage: React.FC = () => {
  return (
    <DefaultLayout>
      <WeatherNoticeContainer>
        <WeatherCard />
        <Notice />
      </WeatherNoticeContainer>
    </DefaultLayout>
  );
};

export default MainPage;
