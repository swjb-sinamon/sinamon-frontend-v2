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
  width: 100%;
`;

const MealList = styled.div`
  width: 53vw;
  
  display: flex;
  justify-content: space-between;

  ${makeMediaQuery(Breakpoints.MD)} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 100%;
  }
`;

const MealBox = styled.div`
  width: 25.5vw;
  height: 300px;
  
  border: 1px solid var(--color-gray);
  border-radius: 32px;

  padding: 2rem 2rem 2.5rem;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  transition: 0.3s;
  &:hover{
    transform: translateY(-3px);
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    width: 100%;
    height: 400px;
   
    border: 1px solid var(--color-gray);
    border-radius: 32px;
    
    box-shadow: 0 0 30px rgba(169, 169, 169, 0.2); 
    margin-bottom: 1rem;
  }
`;

const MealPage = () => {
  const { today, tomorrow } = useMeal();
  return (
    <DefaultLayout>
        <Box>
          <Heading2>급식</Heading2>
          <Gap gap={24} />
          <MealList>
            <MealBox>
              <StyledHeading3>오늘</StyledHeading3>
              <Gap gap={32} />
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
