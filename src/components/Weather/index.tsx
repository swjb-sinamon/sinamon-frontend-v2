import React from 'react';
import styled from '@emotion/styled';
import { useWeather } from '../../hooks/useWeather';
import { convertPm10ToString, convertPm25ToString } from '../../utils/Dust';
import WeatherIcon from '../../atoms/Icon/WeatherIcon';

const WeatherContent = styled.div<{ background: string }>`
  background: ${(props) => props.background};

  border-radius: 30px;

  padding: 46px 40px 30px;
`;

const WeatherContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px 26px;

  border-bottom: 2px solid #fff;
`;

const WeatherContentStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledWeatherTemp = styled.div`
  font-size: 3.4rem;
  color: #fff;

  font-weight: 700;
`;

const StyledWeatherStatus = styled.div`
  color: #fff;
  font-size: 1.2rem;
`;

const DustContentBottom = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 12px 16px;
`;

const StyledDustStatus = styled.p`
  color: #fff;
`;

const StyledDustHighlight = styled.span`
  font-weight: bold;
`;

const WeatherCard: React.FC = () => {
  const { weather, dust } = useWeather();

  const [pm10Text] = convertPm10ToString(dust.pm10);
  const [pm25Text] = convertPm25ToString(dust.pm25);

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

  return (
    <>
      <WeatherContent background={background.CLOUDS}>
        <WeatherContentTop>
          <WeatherIcon weather={weather.status} />
          <WeatherContentStatus>
            <StyledWeatherTemp>{weather.temp}℃</StyledWeatherTemp>
            <StyledWeatherStatus>{status[weather.status]}</StyledWeatherStatus>
          </WeatherContentStatus>
        </WeatherContentTop>

        <DustContentBottom>
          <StyledDustStatus>
            미세먼지 <StyledDustHighlight>{pm10Text}</StyledDustHighlight>
          </StyledDustStatus>
          <StyledDustStatus>
            초미세먼지 <StyledDustHighlight>{pm25Text}</StyledDustHighlight>
          </StyledDustStatus>
        </DustContentBottom>
      </WeatherContent>
    </>
  );
};

export default WeatherCard;
