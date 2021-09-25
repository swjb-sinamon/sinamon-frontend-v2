import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layouts/DefaultLayout';
import Api from '../../apis';
import ClubTable from '../../components/Club/ClubTable';
import { ClubType } from '../../types/ApiResponse';
import { Heading2 } from '../../atoms/Typography/Heading';
import Emoji from '../../atoms/Emoji';
import { Gap } from '../../utils/Gap';

const AdminClubManagenmentPage: React.FC = () => {
  const [data, setData] = useState<ClubType[]>([]);

  const fetchData = () => {
    Api.get('/auth/admin').then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => fetchData(), []);

  return (
    <>
      <Helmet>
        <title>동아리 인원 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="people" symbol="🧑‍🤝‍🧑" /> 동아리 인원 관리
        </Heading2>

        <Gap gap={32} />

        <ClubTable data={data} />
      </DefaultLayout>
    </>
  );
};

export default AdminClubManagenmentPage;
