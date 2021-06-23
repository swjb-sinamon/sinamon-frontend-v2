import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../apis';

const DEFAULT_TEXT = '급식이 없습니다.';
const context = createContext<string>(DEFAULT_TEXT);

export const MealProvider: React.FC = ({ children }) => {
  const [meal, setMeal] = useState<string>(DEFAULT_TEXT);
  useEffect(() => {
    Api.get('/school/meal?type=today').then((res) => {
      setMeal(res.data.data);
    });
  }, []);

  return <context.Provider value={meal}>{children}</context.Provider>;
};

export const useMeal = () => useContext(context);
