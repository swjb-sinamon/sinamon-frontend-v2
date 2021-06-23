import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import GlobalStyle from './styles/Global';
import { ProfileProvider } from './hooks/useProfile';
import { MealProvider } from './hooks/useMeal';

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <MealProvider>
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
      </MealProvider>
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
