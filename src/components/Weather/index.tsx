import React from 'react';
import styled from '@emotion/styled';
import Notice from '../Notice/index';
import { useWeather } from '../../hooks/useWeather';
import { Heading2 } from '../../atoms/Typography/Heading';
import WeatherIcon from '../../atoms/Icon/WeatherIcon';

console.log(WeatherIcon);

const WeatherNoticeContainer = styled.div`
    width: 380px;

    display: flex;
    flex-direction: column;
`
const WeatherHeader = styled.div`
    margin-bottom: 8px;
`

// const StyledWeatherText = styled.span`
//   color: var(--color-main);
// `;

const WeatherContent = styled.div<{ background: string[] }>`
    background: linear-gradient(to top, #a8c0ff, #72a6d6);

    border-radius: 30px;

    padding: 45px 40px 30px;
`
const WeatherContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px 25px;

    border-bottom: 2px solid #fff; 
`

const WeatherContentStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const StyledWeatherTemp = styled.div`
    font-size: 3.4rem;
    color: #fff;
    
    font-weight: 700;
`

const StyledWeatherStatus = styled.div`
    color: #fff;
    font-size: 1.2rem;
`

const DustContentBottom = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 12px 15px;
`

const StyledDustStatus = styled.p`
    color: #fff;
`

const StyledDustHighlight = styled.span`
    font-weight: bold;
`

const WeatherCard: React.FC = () => {
    const { weather, dust } = useWeather();
    
    console.log(weather, dust);

    const background: Record<string, string[]> = {
        CLEAR: ["#e0eafc", "#cfdef3"],
        RAIN: ["#457fca", "#5691c8"]
    }

    return (
        <WeatherNoticeContainer>
            <WeatherHeader>
                <Heading2>
                    오늘의 날씨
                </Heading2>
            </WeatherHeader>
            <WeatherContent background={background.RAIN}>
                <WeatherContentTop>
                    <WeatherIcon weather="RAIN" />
                    <WeatherContentStatus>
                        <StyledWeatherTemp>
                            {weather.temp}℃ 
                        </StyledWeatherTemp>
                        <StyledWeatherStatus>
                            비
                        </StyledWeatherStatus>
                    </WeatherContentStatus>
                </WeatherContentTop>
                <DustContentBottom>
                    <StyledDustStatus>미세먼지 <StyledDustHighlight>좋음</StyledDustHighlight></StyledDustStatus>
                    <StyledDustStatus>초미세먼지 <StyledDustHighlight>좋음</StyledDustHighlight></StyledDustStatus>
                </DustContentBottom>
            </WeatherContent>
            <Notice />
        </ WeatherNoticeContainer>
    )
}

export default WeatherCard;