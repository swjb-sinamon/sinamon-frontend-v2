import React from 'react';
import styled from '@emotion/styled';
import { useWeather } from '../../hooks/useWeather';
import { Heading2 } from '../../atoms/Typography/Heading';
import WeatherIcon from '../../atoms/Icon/WeatherIcon';

console.log(WeatherIcon);

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

const WeatherContent = styled.div<{ background: string[] }>`
    background: linear-gradient(to bottom, #72a6d6, #a8c0ff);

    border-radius: 40px;

    padding: 45px 55px 30px;
`
const WeatherContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px 25px;

    /* border-top: 2px solid #fff;  */
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

    /* border-bottom: 2px solid #fff; */
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
        <WeatherContainer>
            <WeatherHeader>
                <Heading2>
                    <StyledWeatherText> </StyledWeatherText>
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
        </ WeatherContainer>
    )
}

export default WeatherCard;