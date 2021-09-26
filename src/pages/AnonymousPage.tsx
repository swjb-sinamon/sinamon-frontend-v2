import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Heading2, RoundHeading2 } from '../atoms/Typography/Heading';
import { Gap } from '../utils/Gap';
import AnonymousListCard from '../components/AnonymousListCard';
import { Input } from '../atoms/Form/Input';
import { Button } from '../atoms/Button';
import InputError from '../components/Form/InputError';
import Api from '../apis';
import { ApiAnonymous } from '../types/ApiResponse';
import DefaultLayout from '../layouts/DefaultLayout';
import { Textarea } from '../atoms/Form/Textarea';
import Emoji from '../atoms/Emoji';

interface Anonymous {
  readonly title: string;
  readonly content: string;
}

const AnonymousPage: React.FC = () => {
  const [data, setData] = useState<ApiAnonymous[]>([]);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Anonymous>();

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    Api.get('/anonymous/').then((res) => {
      setData(res.data.data);
    });
  };

  const onWrittenClick: SubmitHandler<Anonymous> = async (_data) => {
    const { title, content } = _data;
    await Api.post('/anonymous', {
      title,
      content
    });

    toast.success('익명 건의가 등록되었습니다.');
    fetchData();
  };

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
        <Input placeholder="제목" type="text" autoFocus {...register('title', { required: true })} width={385} />
        <InputError formError={errors.title} type="required">
          제목이 빈칸입니다.
        </InputError>
        <Gap gap={16} />

        <RoundHeading2>내용을 입력해주세요</RoundHeading2>
        <Textarea placeholder="내용" {...register('content', { required: true })} cols={50} rows={15} />
        <InputError formError={errors.content} type="required">
          내용이 빈칸입니다.
        </InputError>
        <Gap gap={30} />

        <Button onClick={handleSubmit(onWrittenClick)}>제출하기</Button>
        <Gap gap={30} />

        <RoundHeading2>익명건의들</RoundHeading2>
        <Gap gap={16} />
        {data.map((item) => {
          return (
            <AnonymousListCard
              title={item.title}
              contents={item.content}
              reply={item.reply[0] ? item.reply[0].content : '답변 대기 중...'}
            />
          );
        })}
      </DefaultLayout>
    </>
  );
};
export default AnonymousPage;
