import React from 'react';
import {
  TableBody,
  TableBodyItem,
  TableBodyRow,
  TableContainer,
  TableHeader,
  TableHeaderItem,
  TableHeaderRow
} from '../../atoms/Table';
import { ApplicationType } from '../../types/ApiResponse';
import { WhiteSquareButton } from '../../atoms/Button';

interface ApplicationTableProps {
  readonly data: ApplicationType[];
}

const convertStatus = (status: 'WAITING' | 'SUCCESS' | 'NONE') => {
  if (status === 'WAITING') {
    return '대기 중';
  }
  if (status === 'SUCCESS') {
    return '신청 완료';
  }
  if (status === 'NONE') {
    return '자동 취소';
  }
  return '알수없음';
};

const ApplicationTable: React.FC<ApplicationTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>과목명</TableHeaderItem>
          <TableHeaderItem>지망순위</TableHeaderItem>
          <TableHeaderItem>상태</TableHeaderItem>
          <TableHeaderItem>신청일</TableHeaderItem>
          <TableHeaderItem>신청 취소</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableBodyRow key={item.id}>
            <TableBodyItem>{item.subject.name}</TableBodyItem>
            <TableBodyItem>{item.priority || '선착순 지원'}</TableBodyItem>
            <TableBodyItem>{convertStatus(item.status)}</TableBodyItem>
            <TableBodyItem>{new Date(item.createdAt).toLocaleDateString()}</TableBodyItem>
            <TableBodyItem>
              <WhiteSquareButton>취소</WhiteSquareButton>
            </TableBodyItem>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default ApplicationTable;
