import React from 'react';
import styled from '@emotion/styled';
import { useWeather } from '../../hooks/useWeather';
import WeatherIcon from '../../atoms/Icon/WeatherIcon';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';

const WeatherContent = styled.div<{ background: string }>`
  background: ${(props) => props.background};

  border-radius: 30px;

  padding: 36px;

  ${makeMediaQuery(Breakpoints.MD)} {
    padding: 36px 40px 30px;
    width: 100%;
  }
`;

const WeatherContentTop = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px 26px;

  ${makeMediaQuery(Breakpoints.MD)} {
    padding: 0 12px 26px;
  }
`;

const WeatherContentStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding-left: 40px;
`;

const StyledWeatherTemp = styled.div`
  font-size: 4rem;
  color: #fff;

  font-weight: 700;

  ${makeMediaQuery(Breakpoints.MD)} {
    font-size: 2.8rem;
  }
`;

const StyledWeatherStatus = styled.div`
  color: #fff;
  font-size: 1.2rem;

  ${makeMediaQuery(Breakpoints.MD)} {
    font-size: 16px;
  }
`;


const background: Record<string, string> = {
  CLEAR: 'linear-gradient(to top, #dbe4e6, #1c92d2)',
  RAIN: 'linear-gradient(to top, #a8c0ff, #72a6d6)',
  CLOUDS: 'linear-gradient(to bottom, #a5d2f7, #e9d9c6)',
  MIST: 'linear-gradient(to top, #c7cdd8, #757F9A)',
  HAZE: 'linear-gradient(to top, #c7cdd8, #757F9A)',
  SNOW: 'linear-gradient(to top, #eef2f3, #8e9eab)'
};

const status: Record<string, string> = {
  CLEAR: '맑음',
  RAIN: '비',
  CLOUDS: '구름',
  MIST: '안개',
  HAZE: '안개',
  SNOW: '눈'
};

const WeatherCard: React.FC = () => {
  const { weather } = useWeather();

  return (
    <WeatherContent background={background.CLOUDS}>
      <WeatherContentTop>
        <WeatherIcon weather={weather.status} />
        <WeatherContentStatus>
          <StyledWeatherTemp>{weather.temp}℃</StyledWeatherTemp>
          <StyledWeatherStatus>{status[weather.status]}</StyledWeatherStatus>
        </WeatherContentStatus>
      </WeatherContentTop>

    </WeatherContent>
  );
};

export default WeatherCard;
