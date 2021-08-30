import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Sunny } from '../../assets/Weathers/sunny.svg';
import { ReactComponent as Cloudy } from '../../assets/Weathers/cloudy.svg';
import { ReactComponent as CloudySunny } from '../../assets/Weathers/cloudy-and-sunny.svg';
import { ReactComponent as Rainy } from '../../assets/Weathers/rainy.svg';
import { ReactComponent as Snowstorm } from '../../assets/Weathers/snowstorm.svg';
import Moon from '../../assets/Weathers/moon.png';

interface WeatherIconProps {
  readonly weather: string;
}

const StyledSVG = styled.svg`
  filter: drop-shadow(0 0 30px rgba(169, 169, 169, 0.6));
  width: 100px;
  height: 100px;

  stroke: #a9a9a9;
  stroke-width: 1px;
`;

const StyledIMG = styled.img`
  filter: drop-shadow(0 0 30px rgba(169, 169, 169, 0.6));
  width: 100px;
  height: 100px;

  stroke: #a9a9a9;
  stroke-width: 1px;
`;

const WeatherIcon: React.FC<WeatherIconProps> = ({ weather }) => {
  const hours = new Date().getHours();
  const isNight = (hours >= 18 && hours <= 23) || (hours >= 0 && hours <= 6);

  if (weather === 'CLEAR') {
    if (isNight) {
      return <StyledIMG src={Moon} alt="moon" />;
    }
    return (
      <StyledSVG>
        <Sunny />
      </StyledSVG>
    );
  }
  if (weather === 'RAIN') {
    return (
      <StyledSVG>
        <Rainy />
      </StyledSVG>
    );
  }
  if (weather === 'CLOUDS') {
    return (
      <StyledSVG>
        <CloudySunny />
      </StyledSVG>
    );
  }
  if (weather === 'SNOW')
    return (
      <StyledSVG>
        <Snowstorm />
      </StyledSVG>
    );
  if (weather === 'HAZE' || weather === 'MIST') {
    return (
      <StyledSVG>
        <Cloudy />
      </StyledSVG>
    );
  }
  return (
    <StyledSVG>
      <CloudySunny />
    </StyledSVG>
  );
};

export default WeatherIcon;
