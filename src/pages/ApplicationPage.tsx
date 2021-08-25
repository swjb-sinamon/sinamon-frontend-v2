import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import DefaultLayout from '../layouts/DefaultLayout';
import { Heading2 } from '../atoms/Typography/Heading';
import Emoji from '../atoms/Emoji';
import { Gap } from '../utils/Gap';
import { Button } from '../atoms/Button';
import Api from '../apis';
import { ApplicationType } from '../types/ApiResponse';
import ApplicationTable from '../components/Subject/ApplicationTable';

const Highlight = styled.span`
  color: var(--color-error);
`;

const ApplicationPage: React.FC = () => {
  const history = useHistory();

  const [data, setData] = useState<ApplicationType[]>([]);

  useEffect(() => {
    Api.get('/application/me').then((res) => setData(res.data.data));
  }, []);

  return (
    <>
      <Helmet>
        <title>지원 현황 - 수정과</title>
      </Helmet>

      <DefaultLayout>
        <Heading2>
          <Emoji label="pencil" symbol="✏" /> 지원 현황
        </Heading2>

        <Gap gap={32} />

        <Button onClick={() => history.goBack()}>뒤로가기</Button>

        <Gap gap={16} />

        <p>
          <Highlight>대기 중</Highlight>은 아직 신청 완료가 안된 상태, <Highlight>자동 취소</Highlight>는 다른 과목이
          신청 완료되어 취소된 과목을 뜻합니다.
        </p>
        <p>
          <Highlight>대기 중</Highlight>인 과목만 신청 취소가 가능합니다.
        </p>

        <Gap gap={8} />

        <ApplicationTable data={data} />
      </DefaultLayout>
    </>
  );
};

export default ApplicationPage;
