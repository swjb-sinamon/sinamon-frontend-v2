import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { toast } from 'react-hot-toast';
import { Heading2, Heading3 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { Gap } from '../../utils/Gap';
import { Button } from '../../atoms/Button';
import Pagination from '../../components/Pagination';
import AdminApplicationTable from '../../components/Subject/AdminApplicationTable';
import { ApplicationType } from '../../types/ApiResponse';
import Api from '../../apis';
import { downloadFile } from '../../utils/FileDownload';

const ButtonGroup = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const AdminApplicationPage: React.FC = () => {
  const [api, setApi] = useState<{ data: ApplicationType[]; count: number }>({ data: [], count: 0 });
  const [page, setPage] = useState<number>(1);

  const [canApplication, setCanApplication] = useState<boolean>(false);

  const fetchData = (p: number) => {
    Api.get(`/application?limit=10&offset=${p}`).then((res) => {
      setApi({
        data: res.data.data,
        count: res.data.count
      });
    });
  };

  const fetchCanApplication = () => {
    Api.get('/application/config').then((res) => setCanApplication(res.data.data));
  };

  const onCanApplicationClick = (value: boolean) => {
    Api.put('/application/config', { value }).then(() => {
      toast.success('수강신청 상태를 변경하였습니다.');
      fetchCanApplication();
    });
  };

  const onCsvDownloadClick = () => {
    Api.get('/application/csv').then((res) => {
      const date = new Date().toLocaleDateString().replace(/ /g, '');
      downloadFile(res.data.data, `${date}-application.csv`);
    });
  };

  useEffect(() => {
    fetchData(1);
    fetchCanApplication();
  }, []);

  return (
    <>
      <Helmet>
        <title>수강신청 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="pencil" symbol="✏" /> 수강신청 관리
        </Heading2>

        <Gap gap={32} />

        <Heading3>현재 수강신청 {canApplication ? '활성화' : '비활성화'} 상태입니다.</Heading3>
        <Gap gap={8} />
        <ButtonGroup>
          <Button onClick={() => onCanApplicationClick(true)}>수강신청 활성화</Button>
          <Button onClick={() => onCanApplicationClick(false)}>수강신청 비활성화</Button>
          <Button onClick={onCsvDownloadClick}>전체 데이터 다운로드</Button>
        </ButtonGroup>

        <Gap gap={16} />

        <AdminApplicationTable data={api.data} />

        <Gap gap={32} />

        <Pagination onPageChange={fetchData} dataCount={api.count} pageLimit={10} page={page} setPage={setPage} />
      </DefaultLayout>
    </>
  );
};

export default AdminApplicationPage;
