import React, { useState, useEffect, useCallback } from 'react';

import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { ProfileType } from '../../types/ApiResponse';

import { Gap } from '../../utils/Gap';
import { Label } from '../../atoms/Form/Label';
import { Input } from '../../atoms/Form/Input';
import { Select } from '../../atoms/Form/Select';
import { Heading2 } from '../../atoms/Typography/Heading';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';

import Api from '../../apis';
import Emoji from '../../atoms/Emoji';
import UserTable from '../../components/User/UserTable';
import Pagination from '../../components/Pagination';
import DefaultLayout from '../../layouts/DefaultLayout';

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 23rem;
    margin-top: 10px;
  }

  select {
    width: 8rem;
  }

  ${makeMediaQuery(Breakpoints.LG)} {
    flex-direction: column;

    input {
      width: 30rem;
    }

    select {
      width: 14rem;
    }
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    flex-direction: column;
    align-items: center;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  select {
    margin-top: 10px;
    margin-left: 10px;
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    justify-content: space-between;
    select {
      width: 12rem;
    }
  }
`;

const UserPage: React.FC = () => {
  const [data, setData] = useState<ProfileType[]>([]);

  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const [grade, setGrade] = useState<string>('');
  const [clazz, setclazz] = useState<string>('');

  const [search, setSearch] = useState<string>('');

  const fetchData = useCallback(
    (p: number, searchValue: string) => {
      const gradeQuery = grade ? `&filters[grade]=${grade}` : '';
      const clazzQuery = clazz ? `&filters[class]=${clazz}` : '';

      Api.get(`/auth/user?limit=30&offset=${p}&search=${searchValue}${gradeQuery}${clazzQuery}`).then((res) => {
        setData(res.data.data);
        setCount(res.data.count);
      });
    },
    [clazz, grade]
  );

  useEffect(() => {
    fetchData(1, '');
  }, [fetchData]);

  return (
    <>
      <Helmet>
        <title>유저 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="people" symbol="🧑‍🤝‍🧑" /> 유저 관리
        </Heading2>

        <Gap gap={32} />

        <ControlContainer>
          <Input
            type="text"
            placeholder="유저 이름 검색(엔터)"
            onKeyPress={(e) => {
              if (e.key === 'Enter') fetchData(1, search);
            }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <SelectContainer>
            <Select
              onChange={(e) => {
                setGrade(e.target.value);
                setSearch('');
              }}
              value={grade}
            >
              <option value="">학년 전체</option>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
            </Select>

            <Select
              onChange={(e) => {
                setclazz(e.target.value);
                setSearch('');
              }}
              value={clazz}
            >
              <option value="">반 전체</option>
              <option value="1">1반</option>
              <option value="2">2반</option>
            </Select>
          </SelectContainer>
        </ControlContainer>

        <Gap gap={16} />

        <UserTable data={data} />

        <Gap gap={16} />
        <Label>전체: {count}명</Label>
        <Pagination
          onPageChange={(pageOffset) => fetchData(pageOffset, search)}
          dataCount={count}
          pageLimit={10}
          page={page}
          setPage={setPage}
        />
      </DefaultLayout>
    </>
  );
};

export default UserPage;
