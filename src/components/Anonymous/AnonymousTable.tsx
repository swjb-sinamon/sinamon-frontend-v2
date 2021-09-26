import React from 'react';
import { faComments, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import {
  TableBody,
  TableBodyItem,
  TableBodyRow,
  TableContainer,
  TableHeader,
  TableHeaderItem,
  TableHeaderRow
} from '../../atoms/Table';
import { ApiAnonymous } from '../../types/ApiResponse';
import { Button } from '../../atoms/Button';

const ButtonList = styled.div`
  & > * {
    margin-right: 8px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

interface AnonymousTableProps {
  readonly data: ApiAnonymous[];
  readonly onAddReplyClick: (data: ApiAnonymous) => void;
  readonly onUpdateReplyClick: (data: ApiAnonymous) => void;
  readonly onDeleteReplyClick: (data: ApiAnonymous) => void;
}

const AnonymousTable: React.FC<AnonymousTableProps> = ({
  data,
  onAddReplyClick,
  onUpdateReplyClick,
  onDeleteReplyClick
}) => {
  const ReplyButton = (clickedData: ApiAnonymous) => {
    const { reply } = clickedData;

    if (reply.length === 0) {
      return (
        <Button fontSize="14" onClick={() => onAddReplyClick(clickedData)}>
          답변 달기
        </Button>
      );
    }

    return (
      <ButtonList>
        {/* eslint-disable-next-line no-alert */}
        <Button fontSize="14" onClick={() => alert(reply[0].content)}>
          <FontAwesomeIcon icon={faComments} />
        </Button>

        <Button fontSize="14" onClick={() => onUpdateReplyClick(clickedData)}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>

        <Button fontSize="14" onClick={() => onDeleteReplyClick(clickedData)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </ButtonList>
    );
  };

  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>제목</TableHeaderItem>
          <TableHeaderItem>내용</TableHeaderItem>
          <TableHeaderItem>답변</TableHeaderItem>
          <TableHeaderItem>작성일</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableBodyRow key={item.id}>
            <TableBodyItem>{item.title}</TableBodyItem>
            <TableBodyItem>
              {/* eslint-disable-next-line no-alert */}
              <Button fontSize="14" onClick={() => alert(item.content)}>
                내용 보기
              </Button>
            </TableBodyItem>
            <TableBodyItem>{ReplyButton(item)}</TableBodyItem>
            <TableBodyItem>{new Date(item.createdAt).toLocaleDateString()}</TableBodyItem>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default AnonymousTable;
