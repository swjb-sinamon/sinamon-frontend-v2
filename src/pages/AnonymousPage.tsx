import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import styled from '@emotion/styled';
import { Gap } from '../utils/Gap';
import { Heading1, Heading3 , RoundHeading2 } from '../atoms/Typography/Heading';
import AnonymousListCard from '../components/AnonymousListCard';
import { Input } from '../atoms/Form/Input';
import { Button } from '../atoms/Button';
import Api from '../apis';
import MainSideBar from '../components/Sidebar';
import {ApiAnonymous} from '../types/ApiResponse';
import DefaultLayout from '../layouts/DefaultLayout';


const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledTextAreaContents = styled.textarea`
padding-left: 16px;
padding-top: 15px;

background-color: white;

border-radius: 3px;
border: 1px solid var(--color-gray);

font-size: 16px;
font-weight: bold;

:disabled {
  cursor: no-drop;
  background-color: #efefef;
}

:lang(ko) {
  word-break: keep-all;
}
`;

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
    const camelCase = async () => {
        if (written.title.trim() === '' || written.contents.trim() === '') {
            toast.error('제목 또는 내용이 빈칸입니다');
            return;
        }
        await Api.post('/anonymous', {
            title: written.title,
            contents: written.contents
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
        <DefaultLayout>
            <Helmet>
                <title>익명페이지 - 수정과</title>
            </Helmet>
            <MainSideBar>
                <MainSideBar />
                <StyledContent>
                    <Heading1>익명 건의함</Heading1>
                    <Heading3>익명으로 글을 작성하실 수 있습니다</Heading3>
                    <Gap gap={30} />
                    <RoundHeading2>제목을 적어주세요</RoundHeading2>
                    <Input
                        placeholder="제목"
                        title={written.title}
                        type="text"
                        onChange={(e) => onTitleChange(e, 'title')}
                        width={480}
                    />
                    <Gap gap={10} />
                    
                    <RoundHeading2>내용을 입력해주세요</RoundHeading2>
                    <StyledTextAreaContents
                        placeholder="내용"
                        value={written.contents}
                        onChange={(e) => onContentsChange(e, 'contents')}
                        cols={50}
                        rows={30}
                    />
                    <Gap gap={30} />
                    <Button onClick={camelCase} >제출하기</Button>
                    <Gap gap={30} />
                    <RoundHeading2>익명리스트</RoundHeading2>
                    {
                        apiWritten.map((item) => {
                            return (
                                <AnonymousListCard title={item.title} contents={item.contents} />
                            );
                        })
                    }
                </StyledContent>
            </MainSideBar>
        </DefaultLayout>
    )

}
export default AnonymousPage;