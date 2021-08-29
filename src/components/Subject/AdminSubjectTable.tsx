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
import { WhiteSquareButton } from '../../atoms/Button';

interface SubjectTableProps {
  readonly data: SubjectType[];
  readonly onButtonClick?: (subject: SubjectType) => void;
}

const AdminSubjectTable: React.FC<SubjectTableProps> = ({ data, onButtonClick }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>이름</TableHeaderItem>
          <TableHeaderItem>설명</TableHeaderItem>
          <TableHeaderItem>종류</TableHeaderItem>
          <TableHeaderItem>방법</TableHeaderItem>
          <TableHeaderItem>인원</TableHeaderItem>
          <TableHeaderItem>추첨</TableHeaderItem>
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
            <TableBodyItem>
              <WhiteSquareButton
                disabled={
                  item.subjectData.applicationType === 'ORDER' ||
                  item.subjectData.currentPeople === item.subjectData.maxPeople
                }
                onClick={() => onButtonClick && onButtonClick(item)}
              >
                추첨
              </WhiteSquareButton>
            </TableBodyItem>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default AdminSubjectTable;
