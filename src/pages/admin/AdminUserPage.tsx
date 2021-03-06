import React, { useState, useEffect, useCallback } from 'react';

import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { ProfileType } from '../../types/ApiResponse';

import { Gap } from '../../utils/Gap';
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

  input {
    width: 23rem;
    margin-top: 10px;
  }

  select {
    width: 8rem;
  }

  ${makeMediaQuery(Breakpoints.LG)} {
    flex-direction: column;

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
      width: 10rem;
    }
  }
`;

const StyledInput = styled(Input)`
  ${makeMediaQuery(Breakpoints.MD)} {
    width: 100%;
  }
`;

const AdminUserPage: React.FC = () => {
  const [data, setData] = useState<{ data: ProfileType[]; count: number }>({ data: [], count: 0 });
  const [page, setPage] = useState<number>(1);

  const [grade, setGrade] = useState<string>('');
  const [clazz, setclazz] = useState<string>('');

  const [search, setSearch] = useState<string>('');

  const fetchData = useCallback(
    (p: number, searchValue: string) => {
      const gradeQuery = grade ? `&filters[grade]=${grade}` : '';
      const clazzQuery = clazz ? `&filters[class]=${clazz}` : '';

      Api.get(`/auth/user?limit=10&offset=${p}&search=${searchValue}${gradeQuery}${clazzQuery}`).then((res) => {
        setData({
          data: res.data.data,
          count: res.data.count
        });
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
        <title>?????? ?????? - ????????? ?????????</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="people" symbol="??????????????????" /> ?????? ??????
        </Heading2>

        <Gap gap={32} />

        <ControlContainer>
          <StyledInput
            type="text"
            placeholder="?????? ?????? ??????(??????)"
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
              <option value="">?????? ??????</option>
              <option value="1">1??????</option>
              <option value="2">2??????</option>
              <option value="3">3??????</option>
            </Select>

            <Select
              onChange={(e) => {
                setclazz(e.target.value);
                setSearch('');
              }}
              value={clazz}
            >
              <option value="">??? ??????</option>
              <option value="1">1???</option>
              <option value="2">2???</option>
            </Select>
          </SelectContainer>
        </ControlContainer>

        <Gap gap={16} />

        <UserTable data={data.data} />

        <Gap gap={32} />

        <Pagination
          onPageChange={(pageOffset) => fetchData(pageOffset, search)}
          dataCount={data.count}
          pageLimit={10}
          page={page}
          setPage={setPage}
        />
      </DefaultLayout>
    </>
  );
};

export default AdminUserPage;
