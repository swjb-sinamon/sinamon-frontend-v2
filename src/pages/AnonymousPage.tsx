import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Gap } from '../utils/Gap';
import { Heading2, RoundHeading2 } from '../atoms/Typography/Heading';
import AnonymousListCard from '../components/AnonymousListCard';
import { Input } from '../atoms/Form/Input';
import { Button } from '../atoms/Button';
import InputError from '../components/Form/InputError';
import Api from '../apis';
import { ApiAnonymous } from '../types/ApiResponse';
import DefaultLayout from '../layouts/DefaultLayout';
import { Textarea } from '../atoms/Form/Textarea';
import Emoji from '../atoms/Emoji';


export interface Anonymous {
  readonly title: string;
  readonly contents: string;
}

const AnonymousPage: React.FC = () => {
  const [apiWritten, setApiWritten] = useState<ApiAnonymous[]>([]);
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<Anonymous>();

  const onWrittenClick : SubmitHandler<Anonymous> = async (data) => {
    const {title, contents} = data;
    if (title.trim() === '' || contents.trim() === '') {
      toast.error('제목 또는 내용이 빈칸입니다');
      return;
    }
      await Api.post('/anonymous', {
        title,
        contents
      });
      toast.success('제출완료!');
      window.location.reload();
    
  };

  useEffect(() => {
    Api.get('/anonymous/').then((res) => {
      setApiWritten(res.data.data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>익명 건의함 - 수정과</title>
      </Helmet>

      <DefaultLayout>
        <Heading2>
          <Emoji label="mailbox" symbol="📫" /> 익명 건의함
        </Heading2>

        <Gap gap={32} />

        <RoundHeading2>제목을 적어주세요</RoundHeading2>
        <Input
          placeholder="제목"
          title="title"
          type="text"
          autoFocus {...register('title', { required: true})}
          width={385}
        />
        <InputError formError={errors.title} type="required">
          제목이 빈칸입니다.
        </InputError>
        <Gap gap={10} />

        <RoundHeading2>내용을 입력해주세요</RoundHeading2>
        <Textarea
          placeholder="내용"
          {...register('contents', { required: true })}
          cols={50}
          rows={15}
        />
        <InputError formError={errors.contents} type="required">
          내용이 빈칸입니다.
        </InputError>
        <Gap gap={30} />
        <Button onClick={handleSubmit(onWrittenClick)}>제출하기</Button>
        <Gap gap={30} />
        <RoundHeading2>익명리스트</RoundHeading2>
        {apiWritten.map((item) => {
          return <AnonymousListCard title={item.title} contents={item.content} />;
        })}
      </DefaultLayout>
    </>
  );
};
export default AnonymousPage;
