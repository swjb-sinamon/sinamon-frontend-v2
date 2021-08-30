import React from 'react';
import { css, Global } from '@emotion/react';

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');
        @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
        @font-face {
          font-family: 'paybooc-ExtraBold';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-ExtraBold.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --color-background: #fafbff;

          --color-main: #0057ff;
          --color-button: var(--color-main);
          --color-button-hover: #004ede;

          --color-subtext: #788097;
          --color-error: #d47998;

          --color-gray: #dfe4ea;

          --color-good: #0097e6;
          --color-fine: #4cd137;
          --color-warn: #fbc531;
          --color-bad: #e84118;

          --color-disabled: hsl(0, 0%, 75%);

          --font-logo: 'paybooc-ExtraBold';
        }

        body {
          font-family: 'Noto Sans KR', sans-serif;
          background-color: var(--color-background);
          color: #111111;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}
    />
  );
};

export default GlobalStyle;
