import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ReactTooltip from 'react-tooltip';
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

  cursor: default;
`;

const NoticeContent = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  cursor: pointer;

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
      <NoticeContent data-tip data-for="full-notice">
        {notice || '공지사항이 없습니다.'}
      </NoticeContent>
      <ReactTooltip id="full-notice" place="bottom">
        {notice || '공지사항이 없습니다.'}
      </ReactTooltip>
    </NoticeContainer>
  );
};

export default Notice;
