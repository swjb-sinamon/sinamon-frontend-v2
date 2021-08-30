import React from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { Heading3, RoundHeading1 } from '../atoms/Typography/Heading';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';
import { Gap } from '../utils/Gap';
import { Button } from '../atoms/Button';
import RegisterForm from '../components/Register/RegisterForm';
import Api from '../apis';

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${makeMediaQuery(Breakpoints.MD)} {
    margin: 32px 0;
  }
`;

const FormBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 4rem;

  border-radius: 3px;
  border: 1px solid var(--color-gray);

  padding: 2rem 2rem 2.5rem;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  ${makeMediaQuery(Breakpoints.MD)} {
    display: block;
  }
`;

const StyledHeading3 = styled(Heading3)`
  color: var(--color-main);

  ${makeMediaQuery(Breakpoints.MD)} {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

export interface RegisterFormType {
  readonly id: string;
  readonly password: string;
  readonly passwordConfirm: string;
  readonly name: string;
  readonly code: string;

  readonly grade: number;
  readonly clazz: number;
  readonly studentNumber: number;

  readonly privacy: string;
  readonly tos: string;
}

const RegisterPage: React.FC = () => {
  const { register, formState, control, handleSubmit } = useForm<RegisterFormType>();
  const history = useHistory();

  const onRegisterClick: SubmitHandler<RegisterFormType> = async (data) => {
    const {
      id,
      password,
      passwordConfirm,
      name,
      code,
      grade: studentGrade,
      clazz: studentClass,
      studentNumber,
      privacy,
      tos
    } = data;

    if (password !== passwordConfirm) {
      toast.error('비밀번호를 다시 확인해주세요.');
      return;
    }

    if ((!privacy || !tos) && (privacy !== 'true' || tos !== 'true')) {
      toast.error('개인정보처리방침 및 이용약관을 동의해주세요');
    }

    await Api.post('/auth/register', {
      id,
      password,
      name,
      department: 5,
      studentGrade,
      studentClass,
      studentNumber,
      code
    });

    toast.success('회원가입 완료! 로그인 페이지로 돌아갑니다...');
    history.push('/login');
  };

  return (
    <>
      <Helmet>
        <title>회원가입 - 수정과</title>
      </Helmet>

      <Container>
        <RoundHeading1>회원가입</RoundHeading1>
        <StyledHeading3>학교를 더 시원하게, IT소프트웨어과 인트라넷</StyledHeading3>
        <Gap gap={32} />

        <FormBox>
          <RegisterForm register={register} formState={formState} control={control} />
        </FormBox>

        <Gap gap={32} />

        <ButtonGroup>
          <Button onClick={() => history.goBack()}>뒤로가기</Button>
          <Button onClick={handleSubmit(onRegisterClick)}>회원가입</Button>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default RegisterPage;
