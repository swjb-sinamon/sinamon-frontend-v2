import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heading1 } from '../../atoms/Typography/Heading';

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Heading1)`
  font-size: 48px;
  color: var(--color-error);
`;

interface UnauthorizedPageProps {
  readonly prevPath?: string;
}

const UnauthorizedPage: React.FC<UnauthorizedPageProps> = ({ prevPath }) => {
  return (
    <>
      <Helmet>
        <title>권한 없음 - 수정과</title>
      </Helmet>

      <Container>
        <Title>ERROR</Title>
        <Heading1>접근 권한이 없습니다.</Heading1>
        <p>
          또는 <Link to="/">메인페이지</Link> / <Link to={`/login?q=${prevPath ?? '/'}`}>로그인하기</Link>
        </p>
      </Container>
    </>
  );
};

export default UnauthorizedPage;
