import React from 'react';
import styled from '@emotion/styled';
import Side from '../components/Sidebar';
import { Heading2, Heading3 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';

const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: center;

`;

const StyledHeading3 = styled(Heading3)`
  color: var(--color-main);
`;

const Box = styled.div`
    padding: 32px;
    width: 100vw;
`;

const MealList = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`;

const MealBox = styled.div`
    width: 11vw;
    height: 26vh;
    border-radius: 3px;
    border: 1px solid var(--color-gray);
    border-radius: 30px;

    padding: 2rem 2rem 2.5rem;
    box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);
    ${makeMediaQuery(Breakpoints.MD)} {
    display: block;
  }
`;

const MealPage = () => {
    return (
        <Container>
            <Side />

            <Box>
                <Heading2>이번주 급식</Heading2>
                <Gap gap={8} />
                <MealList>
                    <MealBox>
                        <StyledHeading3>월요일</StyledHeading3>
                        <Gap gap={16} />
                        <p>고기</p>
                        <p>돼지고기</p>
                        <p>소고기</p>
                    </MealBox>
                    <MealBox>
                        <StyledHeading3>화요일</StyledHeading3>
                        <Gap gap={16} />
                        <p>고기</p>
                        <p>돼지고기</p>
                        <p>소고기</p>
                    </MealBox>
                    <MealBox>
                        <StyledHeading3>수요일</StyledHeading3>
                        <Gap gap={16} />
                        <p>고기</p>
                        <p>돼지고기</p>
                        <p>소고기</p>
                    </MealBox>
                    <MealBox>
                        <StyledHeading3>목요일</StyledHeading3>
                        <Gap gap={16} />
                        <p>고기</p>
                        <p>돼지고기</p>
                        <p>소고기</p>
                    </MealBox>
                    <MealBox>
                        <StyledHeading3>금요일</StyledHeading3>
                        <Gap gap={16} />
                        <p>고기</p>
                        <p>돼지고기</p>
                        <p>소고기</p>
                    </MealBox>
                </MealList>
            </Box>
        </Container>
    );
};

export default MealPage;
