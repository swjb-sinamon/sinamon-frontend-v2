import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { toast } from 'react-hot-toast';
import { Heading2 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { CodeType } from '../../types/ApiResponse';
import Api from '../../apis';
import { Gap } from '../../utils/Gap';
import Pagination from '../../components/Pagination';
import CodeTable from '../../components/Code/CodeTable';
import { Button } from '../../atoms/Button';
import { downloadFile } from '../../utils/FileDownload';

const HeaderButton = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const AdminCodePage: React.FC = () => {
  const [data, setData] = useState<{ data: CodeType[]; count: number }>({ data: [], count: 0 });
  const [page, setPage] = useState<number>(1);

  const fetchData = (p: number) => {
    Api.get(`/code?limit=10&offset=${p}`).then((res) => {
      setData({
        data: res.data.data,
        count: res.data.count
      });
    });
  };

  useEffect(() => fetchData(1), []);

  const onAddClick = () => {
    Api.post('/code').then((res) => {
      toast.success(`${res.data.data} 인증코드를 새로 만들었습니다.`);
      setPage(1);
      fetchData(1);
    });
  };

  const onCsvDownloadClick = () => {
    Api.get('/code/csv').then((res) => {
      const date = new Date().toLocaleDateString().replace(/ /g, '');
      downloadFile(res.data.data, `${date}-code.csv`);
    });
  };

  return (
    <>
      <Helmet>
        <title>인증코드 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="key" symbol="🔑" /> 인증코드 관리
        </Heading2>

        <Gap gap={32} />

        <HeaderButton>
          <Button onClick={onAddClick}>인증코드 추가</Button>
          <Button onClick={onCsvDownloadClick}>CSV 다운로드</Button>
        </HeaderButton>

        <Gap gap={16} />

        <CodeTable data={data.data} />

        <Gap gap={32} />

        <Pagination onPageChange={fetchData} dataCount={data.count} pageLimit={10} page={page} setPage={setPage} />
      </DefaultLayout>
    </>
  );
};

export default AdminCodePage;
