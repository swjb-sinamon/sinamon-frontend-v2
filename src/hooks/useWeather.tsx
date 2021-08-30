import React, { createContext, useContext, useEffect, useState } from 'react';
import { DustType, WeatherType } from '../types/ApiResponse';
import Api from '../apis';

interface WeatherState {
  readonly weather: WeatherType;
  readonly dust: DustType;
}

const DEFAULT_STATE: WeatherState = {
  weather: {
    status: 'NONE',
    temp: 0
  },
  dust: {
    pm10: 0,
    pm25: 0
  }
};

const context = createContext<WeatherState>(DEFAULT_STATE);

export const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<WeatherType>(DEFAULT_STATE.weather);
  const [dust, setDust] = useState<DustType>(DEFAULT_STATE.dust);

  useEffect(() => {
    Api.get('/weather').then((res) => {
      setWeather(res.data.data);
    });
    Api.get('/weather/dust').then((res) => {
      setDust(res.data.data);
    });
  }, []);

  return (
    <context.Provider
      value={{
        weather,
        dust
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useWeather = () => useContext(context);
