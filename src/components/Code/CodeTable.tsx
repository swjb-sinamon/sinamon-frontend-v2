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
import { CodeType } from '../../types/ApiResponse';

interface CodeTableProps {
  readonly data: CodeType[];
}

const CodeTable: React.FC<CodeTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>코드</TableHeaderItem>
          <TableHeaderItem>사용일</TableHeaderItem>
          <TableHeaderItem>생성일</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableBodyRow key={item.id}>
            <TableBodyItem>{item.code}</TableBodyItem>
            <TableBodyItem>{item.useAt ? new Date(item.useAt).toLocaleDateString() : '사용 가능'}</TableBodyItem>
            <TableBodyItem>{new Date(item.createdAt).toLocaleDateString()}</TableBodyItem>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default CodeTable;
