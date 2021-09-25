import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heading2 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { Gap } from '../../utils/Gap';

const AdminAnonymousPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>익명건의함 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="mailbox" symbol="📫" /> 익명건의함 관리
        </Heading2>

        <Gap gap={32} />
      </DefaultLayout>
    </>
  );
};

export default AdminAnonymousPage;
