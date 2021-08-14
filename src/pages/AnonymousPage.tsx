import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { Gap } from '../utils/Gap';
import { Heading2, RoundHeading2 } from '../atoms/Typography/Heading';
import AnonymousListCard from '../components/AnonymousListCard';
import { Input } from '../atoms/Form/Input';
import { Button } from '../atoms/Button';
import Api from '../apis';
import { ApiAnonymous } from '../types/ApiResponse';
import DefaultLayout from '../layouts/DefaultLayout';
import { Textarea } from '../atoms/Form/Textarea';
import Emoji from '../atoms/Emoji';

interface Anonymous {
  readonly title: string;
  readonly contents: string;
}

const AnonymousPage: React.FC = () => {
  const [apiWritten, setApiWritten] = useState<ApiAnonymous[]>([]);

  const [written, setWritten] = useState<Anonymous>({
    title: '',
    contents: ''
  });

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof Anonymous) => {
    e.persist();

    setWritten((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };

  const onContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>, type: keyof Anonymous) => {
    e.persist();

    setWritten((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };

  const onWrittenClick = async () => {
    if (written.title.trim() === '' || written.contents.trim() === '') {
      toast.error('제목 또는 내용이 빈칸입니다');
      return;
    }

    await Api.post('/anonymous', {
      title: written.title,
      content: written.contents
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
          title={written.title}
          type="text"
          onChange={(e) => onTitleChange(e, 'title')}
          width={385}
        />
        <Gap gap={10} />

        <RoundHeading2>내용을 입력해주세요</RoundHeading2>
        <Textarea
          placeholder="내용"
          value={written.contents}
          onChange={(e) => onContentsChange(e, 'contents')}
          cols={50}
          rows={15}
        />
        <Gap gap={30} />
        <Button onClick={onWrittenClick}>제출하기</Button>
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
