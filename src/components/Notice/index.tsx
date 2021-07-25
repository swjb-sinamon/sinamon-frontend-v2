import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Api from '../../apis';

const NoticeContainer = styled.div`
  font-size: .9rem;
  color: #666;

  display: flex;

  margin-top: 8px;
  padding: 0 8px;
`;

const NoticeTitle = styled.p`
  width: 65px;

  color: #111d68;
  font-weight: bold;
`;

const NoticeContent = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

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
