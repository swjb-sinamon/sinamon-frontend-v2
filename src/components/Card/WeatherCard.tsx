import React from 'react';
import styled from '@emotion/styled';
import { useWeather } from '../../hooks/useWeather';
import { Heading2 } from '../../atoms/Typography/Heading';

const WeatherContainer = styled.div`
    width: 400px;

    display: flex;
    flex-direction: column;
`

const WeatherHeader = styled.div`
    margin-bottom: 8px;
`

const StyledWeatherText = styled.span`
  color: var(--color-main);
`;

const WeatherContent = styled.div`
    border-top: 3px solid #fff;
`
const StyledWeatherStatus = styled.div`
    border-bottom: 3px solid #fff;
`

const WeatherCard: React.FC = () => {
    const { weather, dust } = useWeather();
    console.log(weather, dust);

    return (
        <WeatherContainer>
            <WeatherHeader>
                <Heading2>
                    오늘의 <StyledWeatherText> 날씨</StyledWeatherText>
                </Heading2>
            </WeatherHeader>
            <WeatherContent>
                <StyledWeatherStatus>
                    {weather.temp} ℃ 
                </StyledWeatherStatus>
            </WeatherContent>
        </ WeatherContainer>
    )
}

export default WeatherCard;