import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Api from '../../apis';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';

const NoticeContainer = styled.div`
  font-size: 0.9rem;
  color: #666;

  display: flex;

  margin-top: 8px;
  padding: 0 8px;
`;

const NoticeTitle = styled.p`
  color: #111d68;
  font-weight: bold;
  margin-right: 8px;
`;

const NoticeContent = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${makeMediaQuery(Breakpoints.MD)} {
    width: 70%;
  }
`;

const Notice: React.FC = () => {
  const [notice, setNotice] = useState<string>('');

  useEffect(() => {
    Api.get('/notice').then((res) => {
      setNotice(res.data.data);
    });
  }, []);

  return (
    <NoticeContainer>
      <NoticeTitle>공지사항</NoticeTitle>
      <NoticeContent>{notice}</NoticeContent>
    </NoticeContainer>
  );
};

export default Notice;
