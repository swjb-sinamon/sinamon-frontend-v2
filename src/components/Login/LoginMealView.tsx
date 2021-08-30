import React from 'react';
import styled from '@emotion/styled';
import { Heading2 } from '../../atoms/Typography/Heading';
import { useMeal } from '../../hooks/useMeal';

const MealContainer = styled.div`
  width: 240px;
  word-break: keep-all;
  color: var(--color-subtext);
`;

const StyledMealText = styled.span`
  color: var(--color-main);
`;

const LoginMealView: React.FC = () => {
  const { today } = useMeal();

  return (
    <>
      <Heading2>
        오늘의 <StyledMealText>급식</StyledMealText>을 확인해보세요!
      </Heading2>
      <MealContainer>
        <p>{today}</p>
      </MealContainer>
    </>
  );
};

export default LoginMealView;
