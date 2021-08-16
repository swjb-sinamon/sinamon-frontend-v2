import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { toast } from 'react-hot-toast';
import { Heading2, Heading3 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { Gap } from '../../utils/Gap';
import Api from '../../apis';
import { Label } from '../../atoms/Form/Label';
import { Textarea } from '../../atoms/Form/Textarea';
import { Button } from '../../atoms/Button';

const ButtonGroup = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const AdminNoticePage: React.FC = () => {
  const [currentNotice, setCurrentNotice] = useState<string>('불러오는 중...');
  const { register, handleSubmit, reset, setValue } = useForm<{ notice: string }>();

  const fetchData = useCallback(() => {
    Api.get('/notice').then((res) => {
      setCurrentNotice(res.data.data || '공지사항이 비어있습니다.');
      setValue('notice', res.data.data);
    });
  }, [setValue]);

  useEffect(() => fetchData(), [fetchData]);

  const onClick: SubmitHandler<{ notice: string }> = async (data) => {
    const { notice } = data;

    await Api.put('/notice', {
      notice: notice.trim()
    });

    if (notice === '') {
      toast.success('공지사항이 비어있습니다. 빈 상태로 설정합니다.');
    } else {
      toast.success('성공적으로 공지사항이 설정되었습니다.');
    }

    fetchData();
  };

  return (
    <>
      <Helmet>
        <title>공지사항 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="bullhorn" symbol="📢" /> 공지사항 관리
        </Heading2>

        <Gap gap={32} />

        <Heading3>현재 공지사항</Heading3>
        <p>{currentNotice}</p>

        <Gap gap={16} />

        <Label htmlFor="notice">공지사항</Label>
        <Gap gap={4} />
        <Textarea id="notice" cols={60} rows={10} autoFocus {...register('notice')} />

        <Gap gap={16} />

        <ButtonGroup>
          <Button onClick={handleSubmit(onClick)}>설정하기</Button>
          <Button onClick={() => reset({ notice: '' })}>초기화</Button>
        </ButtonGroup>
      </DefaultLayout>
    </>
  );
};

export default AdminNoticePage;
