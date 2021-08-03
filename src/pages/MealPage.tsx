import React from 'react';
import styled from '@emotion/styled';
import DefaultLayout from '../layouts/DefaultLayout';
import { Heading2, Heading3 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { useMeal } from '../hooks/useMeal';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';


const StyledHeading3 = styled(Heading3)`
  color: var(--color-main);
`;

const Box = styled.div`
  padding: 32px;
  width: 100%;
`;

const MealList = styled.div`
  display: flex;
  width: 60vw;
  justify-content: space-between;

  ${makeMediaQuery(Breakpoints.MD)} {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  }
`;

const MealBox = styled.div`
  width: 25vw;
  height: 300px;
  border-radius: 3px;
  border: 1px solid var(--color-gray);
  border-radius: 30px;

  padding: 2rem 2rem 2.5rem;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  ${makeMediaQuery(Breakpoints.MD)} {
    width: 100%;
    height: 400px;
    border-radius: 3px;
    border: 1px solid var(--color-gray);
    border-radius: 30px;
    box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);
    margin-bottom: 1rem;
  }
`;

const MealPage = () => {
  const { today, tomorrow } = useMeal();
  return (
    <DefaultLayout>
        <Box>
          <Heading2>이번주 급식</Heading2>
          <Gap gap={8} />
          <MealList>
            <MealBox>
              <StyledHeading3>오늘</StyledHeading3>
              <Gap gap={16} />
              <p>{today}</p>
            </MealBox>
            <MealBox>
              <StyledHeading3>내일</StyledHeading3>
              <Gap gap={16} />
              <p>{tomorrow}</p>
            </MealBox>
          </MealList>
        </Box>
    </DefaultLayout>
  );
};

export default MealPage;
