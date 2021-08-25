import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import { Heading2, Heading3 } from '../atoms/Typography/Heading';
import Emoji from '../atoms/Emoji';
import { Gap } from '../utils/Gap';
import Api from '../apis';
import { Button } from '../atoms/Button';
import SubjectTable from '../components/Subject/SubjectTable';
import { SubjectType } from '../types/ApiResponse';
import Pagination from '../components/Pagination';

const ButtonGroup = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const SubjectPage: React.FC = () => {
  const history = useHistory();

  const [api, setApi] = useState<{ data: SubjectType[]; count: number }>({ data: [], count: 0 });
  const [page, setPage] = useState<number>(1);

  const fetchData = (p: number) => {
    Api.get(`/subject?limit=10&offset=${p}&search=`).then((res) => {
      setApi({
        data: res.data.data,
        count: res.data.count
      });
    });
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <>
      <Helmet>
        <title>교과 신청 - 수정과</title>
      </Helmet>
      <DefaultLayout>
        <Heading2>
          <Emoji label="school" symbol="🏫" /> 교과 신청
        </Heading2>

        <Gap gap={32} />

        <ButtonGroup>
          <Button onClick={() => history.push('/application')}>신청한 과목 보기</Button>
          <Button>도움말</Button>
        </ButtonGroup>

        <Gap gap={16} />

        <Heading3>개설된 과목</Heading3>
        <Gap gap={8} />
        <SubjectTable data={api.data} />

        <Gap gap={32} />

        <Pagination onPageChange={fetchData} dataCount={api.count} pageLimit={10} page={page} setPage={setPage} />
      </DefaultLayout>
    </>
  );
};

export default SubjectPage;
