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
import { WhiteSquareButton } from '../../atoms/Button';
import { SubjectType } from '../../types/ApiResponse';

interface SubjectTableProps {
  readonly data: SubjectType[];
}

const SubjectTable: React.FC<SubjectTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>이름</TableHeaderItem>
          <TableHeaderItem>설명</TableHeaderItem>
          <TableHeaderItem>종류</TableHeaderItem>
          <TableHeaderItem>인원</TableHeaderItem>
          <TableHeaderItem>신청</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableBodyRow key={item.id}>
            <TableBodyItem>{item.name}</TableBodyItem>
            <TableBodyItem>{item.description}</TableBodyItem>
            <TableBodyItem>{item.type === 'MAJOR_SUBJECT' ? '전공코스' : '선택과목'}</TableBodyItem>
            <TableBodyItem>
              {item.subjectData.currentPeople} / {item.subjectData.maxPeople}
            </TableBodyItem>
            <TableBodyItem>
              <WhiteSquareButton disabled={item.subjectData.currentPeople === item.subjectData.maxPeople}>
                신청
              </WhiteSquareButton>
            </TableBodyItem>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default SubjectTable;
