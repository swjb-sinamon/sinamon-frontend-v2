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
import { SubjectType } from '../../types/ApiResponse';

interface SubjectTableProps {
  readonly data: SubjectType[];
}

const AdminSubjectTable: React.FC<SubjectTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>이름</TableHeaderItem>
          <TableHeaderItem>설명</TableHeaderItem>
          <TableHeaderItem>종류</TableHeaderItem>
          <TableHeaderItem>방법</TableHeaderItem>
          <TableHeaderItem>인원</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableBodyRow key={item.id}>
            <TableBodyItem>{item.name}</TableBodyItem>
            <TableBodyItem>{item.description}</TableBodyItem>
            <TableBodyItem>{item.type === 'MAJOR_SUBJECT' ? '전공코스' : '선택과목'}</TableBodyItem>
            <TableBodyItem>{item.subjectData.applicationType === 'ORDER' ? '선착순' : '무작위추첨'}</TableBodyItem>
            <TableBodyItem>
              {item.subjectData.currentPeople} / {item.subjectData.maxPeople}
            </TableBodyItem>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default AdminSubjectTable;
