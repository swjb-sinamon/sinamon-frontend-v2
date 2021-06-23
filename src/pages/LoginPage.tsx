import React from 'react';
import styled from '@emotion/styled';
import { RoundHeading1 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { Input } from '../atoms/Form/Input';
import { Label } from '../atoms/Form/Label';
import { Button } from '../atoms/Button';
import LoginHeader from '../components/Login/LoginHeader';
import LoginMealView from '../components/Login/LoginMealView';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';

const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 500px);
  place-content: center;
  place-items: center;

  ${makeMediaQuery(Breakpoints.MD)} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  ${makeMediaQuery(Breakpoints.MD)} {
    display: none;
  }
`;

const LoginButtonGroup = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const LoginPage: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <LoginHeader />
        <LoginMealView />
      </LeftContent>

      <div>
        <RoundHeading1>로그인하기</RoundHeading1>
        <Gap gap={24} />
        <div>
          <Label htmlFor="id">아이디</Label>
          <Gap gap={4} />
          <Input id="id" type="text" autoFocus />

          <Gap gap={16} />

          <Label htmlFor="password">비밀번호</Label>
          <Gap gap={4} />
          <Input id="password" type="password" />

          <Gap gap={24} />

          <LoginButtonGroup>
            <Button fontSize="14">로그인</Button>
            <Button fontSize="14">회원가입</Button>
          </LoginButtonGroup>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
