import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heading2 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';

const AdminMainPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="gear" symbol="⚙" /> 어드민 페이지
        </Heading2>
      </DefaultLayout>
    </>
  );
};

export default AdminMainPage;
