import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import DefaultLayout from '../layouts/DefaultLayout';
import { Heading2 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { Button } from '../atoms/Button';
import MyPageForm from '../components/MyPage/MyPageForm';
import { useProfile } from '../hooks/useProfile';

const TipMessage = styled.p`
  color: var(--color-subtext);
`;

export interface MyPageFormType {
  readonly grade: number;
  readonly clazz: number;
  readonly studentNumber: number;
  readonly newPassword: string;
  readonly passwordConfirm: string;
}

const MyPage: React.FC = () => {
  const profile = useProfile();
  const { register, control, formState, getValues, handleSubmit } = useForm<MyPageFormType>();

  return (
    <DefaultLayout>
      <Heading2>{profile?.name} 님의 계정</Heading2>
      <TipMessage>아이디, 이름은 변경할 수 없습니다.</TipMessage>

      <Gap gap={32} />

      {profile && (
        <MyPageForm
          register={register}
          formState={formState}
          control={control}
          getValues={getValues}
          profile={profile}
        />
      )}

      <Gap gap={32} />

      <Button onClick={handleSubmit(() => console.log())}>수정하기</Button>
    </DefaultLayout>
  );
};

export default MyPage;
