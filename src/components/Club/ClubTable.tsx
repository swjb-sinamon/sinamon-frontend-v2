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
import { ClubType } from '../../types/ApiResponse';

interface ClubTableProps {
  readonly data: ClubType[];
}

const ClubTable: React.FC<ClubTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>이름</TableHeaderItem>
          <TableHeaderItem>학년</TableHeaderItem>
          <TableHeaderItem>반</TableHeaderItem>
          <TableHeaderItem>번호</TableHeaderItem>
          <TableHeaderItem>가입일</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableBodyRow key={item.uuid}>
            <TableBodyItem>{item.name}</TableBodyItem>
            <TableBodyItem>{item.studentGrade}</TableBodyItem>
            <TableBodyItem>{item.studentClass}</TableBodyItem>
            <TableBodyItem>{item.studentNumber}</TableBodyItem>
            <TableBodyItem>{new Date(item.createdAt).toLocaleDateString()}</TableBodyItem>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default ClubTable;
