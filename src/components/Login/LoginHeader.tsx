import React from 'react';
import styled from '@emotion/styled';
import { RoundHeading1 } from '../../atoms/Typography/Heading';
import { Gap } from '../../utils/Gap';

const LogoText = styled.span`
  font-family: var(--font-logo), sans-serif;
  font-size: 32px;
  color: var(--color-main);
  text-align: right;
`;

const StyledEmoji = styled.span`
  font-size: 28px;
`;

const LoginHeader: React.FC = () => {
  return (
    <>
      <RoundHeading1>
        학교를 더 쉬원하게{' '}
        <StyledEmoji role="img" aria-label="wave">
          🌊
        </StyledEmoji>{' '}
        <LogoText>수정과</LogoText>
      </RoundHeading1>
      <Gap gap={12} />
    </>
  );
};

export default LoginHeader;
