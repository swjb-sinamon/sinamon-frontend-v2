import React from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../layouts/DefaultLayout';
import { Heading2 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import { Button } from '../atoms/Button';
import MyPageForm from '../components/MyPage/MyPageForm';
import { useProfile } from '../hooks/useProfile';
import Api from '../apis';
import Emoji from '../atoms/Emoji';

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

  const onButtonClick: SubmitHandler<MyPageFormType> = async (data) => {
    console.log(data);
    const { grade, clazz, studentNumber, newPassword, passwordConfirm } = data;

    if (newPassword && newPassword !== passwordConfirm) {
      toast.error('비밀번호를 다시 확인해주세요.');
      return;
    }

    await Api.put('/auth/me', {
      studentGrade: Number(grade),
      studentClass: Number(clazz),
      studentNumber: Number(studentNumber),
      newPassword
    });

    toast.success('계정 정보가 수정되었습니다.');
    window.location.reload();
  };

  return (
    <DefaultLayout>
      <Heading2>
        <Emoji label="hand" symbol="👋" /> {profile?.name} 님의 계정
      </Heading2>
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

      <Button onClick={handleSubmit(onButtonClick)}>수정하기</Button>
    </DefaultLayout>
  );
};

export default MyPage;
