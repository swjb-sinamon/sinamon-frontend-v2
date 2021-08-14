import React from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { RoundHeading1 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { Input } from '../atoms/Form/Input';
import { Label } from '../atoms/Form/Label';
import { Button } from '../atoms/Button';
import LoginHeader from '../components/Login/LoginHeader';
import LoginMealView from '../components/Login/LoginMealView';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';
import InputError from '../components/Form/InputError';
import Api from '../apis';
import { ErrorMessage } from '../apis/ApiErrorMessage';

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

interface LoginForm {
  readonly id: string;
  readonly password: string;
}

const LoginPage: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<LoginForm>();
  const history = useHistory();

  const onLoginClick: SubmitHandler<LoginForm> = async (data) => {
    const { id, password } = data;

    try {
      await Api.post('/auth/login?admin=false', {
        id,
        password
      });

      window.location.reload();
    } catch (e) {
      if (e.response.data.error === ErrorMessage.USER_NOT_FOUND) {
        toast.error('아이디 또는 비밀번호가 올바르지 않습니다.');
      }

      reset({
        password: ''
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>로그인 - 수정과</title>
      </Helmet>

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
            <Input id="id" type="text" autoFocus {...register('id', { required: true })} />
            <InputError formError={errors.id} type="required">
              아이디 칸이 비어있습니다.
            </InputError>

            <Gap gap={16} />

            <Label htmlFor="password">비밀번호</Label>
            <Gap gap={4} />
            <Input
              id="password"
              type="password"
              {...register('password', { required: true })}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(onLoginClick)();
                }
              }}
            />
            <InputError formError={errors.password} type="required">
              비밀번호 칸이 비어있습니다.
            </InputError>

            <Gap gap={24} />

            <LoginButtonGroup>
              <Button fontSize="16" onClick={handleSubmit(onLoginClick)}>
                로그인
              </Button>
              <Button fontSize="16" onClick={() => history.push('/register')}>
                회원가입
              </Button>
            </LoginButtonGroup>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
