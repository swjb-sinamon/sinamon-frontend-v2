import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heading2 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { CodeType } from '../../types/ApiResponse';
import Api from '../../apis';
import { Gap } from '../../utils/Gap';
import Pagination from '../../components/Pagination';
import CodeTable from '../../components/Code/CodeTable';

const AdminCodePage: React.FC = () => {
  const [data, setData] = useState<{ data: CodeType[]; count: number }>({ data: [], count: 0 });

  const fetchData = (page: number) => {
    Api.get(`/code?limit=10&offset=${page}`).then((res) => {
      setData({
        data: res.data.data,
        count: res.data.count
      });
    });
  };

  useEffect(() => fetchData(1), []);

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

        <CodeTable data={data.data} />

        <Gap gap={32} />

        <Pagination onPageChange={fetchData} dataCount={data.count} pageLimit={10} />
      </DefaultLayout>
    </>
  );
};

export default AdminCodePage;
