import React from 'react';
import styled from '@emotion/styled';

const NoticeContainer = styled.div`
    font-size: .8rem;
    color: #666;

    display: flex;
    justify-content: space-between;

    margin-top: 8px;
    padding: 0 5px;
`

const NoticeTitle = styled.span`
    color: #111d68;
`

const NoticeHighlight = styled.span`
    color: #4a506b;
`

const Notice: React.FC = () => {
    return (
        <NoticeContainer>
            <NoticeTitle>코로나19 현황</NoticeTitle>
            확진환자 <NoticeHighlight>치료중 157명</NoticeHighlight>
            | 관리대상자 <NoticeHighlight>자가격리 753명</NoticeHighlight>
        </NoticeContainer>
    )
}

export default Notice;