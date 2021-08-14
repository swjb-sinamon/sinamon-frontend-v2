import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import GlobalStyle from './styles/Global';
import { ProfileProvider } from './hooks/useProfile';
import { MealProvider } from './hooks/useMeal';
import { WeatherProvider } from './hooks/useWeather';
import { TimetableProvider } from './hooks/useTimetable';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ProfileProvider>
        <MealProvider>
          <WeatherProvider>
            <TimetableProvider>
              <Toaster
                position="top-right"
                toastOptions={{
                  style: {
                    fontSize: '14px'
                  }
                }}
              />
              <GlobalStyle />
              <Router />
            </TimetableProvider>
          </WeatherProvider>
        </MealProvider>
      </ProfileProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
