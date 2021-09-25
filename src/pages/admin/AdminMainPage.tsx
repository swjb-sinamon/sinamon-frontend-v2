import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heading2, Heading3 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { Gap } from '../../utils/Gap';

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

        <Gap gap={32} />

        <Heading3>
          수정과 관리 페이지입니다.
          <br />
          권한은 동아리원, 선생님, 학생회로 나뉘어 있습니다.
          <br />
          권한에 따라 접근할 수 있는 관리 페이지가 제한되어 있습니다.
          <br />
          <br />
          수정과 로고를 통해 메인 페이지로 돌아갈 수 있습니다.
        </Heading3>
      </DefaultLayout>
    </>
  );
};

export default AdminMainPage;
