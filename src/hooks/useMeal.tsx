import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../apis';

const DEFAULT_DATA = {
  today: '급식이 없습니다.',
  tomorrow: '급식이 없습니다.'
};
const context = createContext<Record<'today' | 'tomorrow', string>>(DEFAULT_DATA);

export const MealProvider: React.FC = ({ children }) => {
  const [meal, setMeal] = useState<Record<'today' | 'tomorrow', string>>(DEFAULT_DATA);

  useEffect(() => {
    Api.get('/school/meal?type=today')
      .then((res) => {
        setMeal((current) => ({
          ...current,
          today: res.data.data
        }));
        return Api.get('/school/meal?type=tomorrow');
      })
      .then((res) => {
        setMeal((current) => ({
          ...current,
          tomorrow: res.data.data
        }));
      });
  }, []);

  return <context.Provider value={meal}>{children}</context.Provider>;
};

export const useMeal = () => useContext(context);
