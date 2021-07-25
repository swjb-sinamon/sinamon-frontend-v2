import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import WeatherCard from '../components/Weather';

const MainPage: React.FC = () => {
  return (
    <DefaultLayout>
      <WeatherCard />
    </DefaultLayout>
  );
};

export default MainPage;
