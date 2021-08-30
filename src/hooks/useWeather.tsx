import React, { createContext, useContext, useEffect, useState } from 'react';
import { WeatherType } from '../types/ApiResponse';
import Api from '../apis';

interface WeatherState {
  readonly weather: WeatherType;
}

const DEFAULT_STATE: WeatherState = {
  weather: {
    status: 'NONE',
    temp: 0
  }
};

const context = createContext<WeatherState>(DEFAULT_STATE);

export const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<WeatherType>(DEFAULT_STATE.weather);

  useEffect(() => {
    Api.get('/weather').then((res) => {
      setWeather(res.data.data);
    });
  }, []);

  return (
    <context.Provider
      value={{
        weather
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useWeather = () => useContext(context);
