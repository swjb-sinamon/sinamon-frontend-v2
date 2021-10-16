import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { Breakpoints, makeMediaQuery } from '../styles/Breakpoint';
import { Heading1 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { Button } from '../atoms/Button';
import {
  TableBody,
  TableBodyItem,
  TableBodyRow,
  TableContainer,
  TableHeader,
  TableHeaderItem,
  TableHeaderRow
} from '../atoms/Table';

const Title = styled.h1`
  color: transparent;
  font-size: 3.5rem;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: var(--color-main);
  opacity: 0.7;

  ${makeMediaQuery(Breakpoints.MD)} {
    font-size: 3rem;
  }
`;

const SubTitle = styled(Heading1)`
  font-size: 2.3rem;
  margin-top: -1.8rem;
  margin-left: 3rem;

  ${makeMediaQuery(Breakpoints.MD)} {
    font-size: 1.8rem;
    margin-top: -1.3rem;
    margin-left: 2rem;
  }
`;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;

  padding: 1rem;

  ${makeMediaQuery(Breakpoints.MD)} {
    width: 600px;
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    width: 350px;
  }
`;

const DATA = [
  { year: '20', name: '하대겸', role: '메인테이너' },
  { year: '20', name: '홍명철', role: '메인테이너' },
  { year: '20', name: '이유성', role: '기획' },
  { year: '20', name: '신주희', role: '디자인' },
  { year: '20', name: '임유진', role: '디자인' },
  { year: '20', name: '김성현', role: '개발' },
  { year: '20', name: '한동진', role: '개발' },
  { year: '20', name: '김도현', role: '개발' },
  { year: '21', name: '고한혁', role: '개발' },
  { year: '21', name: '김은아', role: '개발' },
  { year: '21', name: '하건우', role: '개발' },
  { year: '21', name: '하선우', role: '개발' },
  { year: '21', name: '황성철', role: '개발' },
  { year: '21', name: '박민성', role: '개발' },
  { year: '21', name: '이준영', role: '개발' },
  { year: '21', name: '김준수', role: '개발' },
  { year: '21', name: '김현중', role: '개발' },
  { year: '21', name: '이민혁', role: '개발' }
];

const ContributorPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>만든 사람들 - 수정과</title>
      </Helmet>

      <Container>
        <Gap gap={24} />
        <Button fontSize="14" onClick={() => history.push('/')}>
          <FontAwesomeIcon icon={faHome} /> 홈으로
        </Button>
        <Gap gap={24} />

        <Title>수정과</Title>
        <SubTitle>를 만든 사람들</SubTitle>
        <Gap gap={24} />

        <TableContainer>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderItem>년도</TableHeaderItem>
              <TableHeaderItem>이름</TableHeaderItem>
              <TableHeaderItem>역할</TableHeaderItem>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {DATA.map((data) => (
              <TableBodyRow key={data.name}>
                <TableBodyItem>{data.year}</TableBodyItem>
                <TableBodyItem>{data.name}</TableBodyItem>
                <TableBodyItem>{data.role}</TableBodyItem>
              </TableBodyRow>
            ))}
          </TableBody>
        </TableContainer>
      </Container>
    </>
  );
};

export default ContributorPage;
