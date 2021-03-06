import React from 'react';
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
import { WhiteSquareButton } from '../../atoms/Button';
import { SubjectType } from '../../types/ApiResponse';

const StyledBodyRow = styled(TableBodyRow)<{ darken?: boolean }>`
  ${(props) => (props.darken ? 'color: var(--color-subtext);' : '')}
`;

interface SubjectTableProps {
  readonly data: SubjectType[];
  readonly onButtonClick?: (subject: SubjectType) => void;
}

const SubjectTable: React.FC<SubjectTableProps> = ({ data, onButtonClick }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderItem>과목명</TableHeaderItem>
          <TableHeaderItem>설명</TableHeaderItem>
          <TableHeaderItem>종류</TableHeaderItem>
          <TableHeaderItem>방법</TableHeaderItem>
          <TableHeaderItem>인원</TableHeaderItem>
          <TableHeaderItem>신청</TableHeaderItem>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <StyledBodyRow key={item.id} darken={item.subjectData.currentPeople === item.subjectData.maxPeople}>
            <TableBodyItem>{item.name}</TableBodyItem>
            <TableBodyItem>{item.description}</TableBodyItem>
            <TableBodyItem>{item.type === 'MAJOR_SUBJECT' ? '전공코스' : '선택과목'}</TableBodyItem>
            <TableBodyItem>{item.subjectData.applicationType === 'ORDER' ? '선착순' : '무작위추첨'}</TableBodyItem>
            <TableBodyItem>
              {item.subjectData.currentPeople} / {item.subjectData.maxPeople}
            </TableBodyItem>
            <TableBodyItem>
              <WhiteSquareButton
                disabled={item.subjectData.currentPeople === item.subjectData.maxPeople}
                onClick={() => onButtonClick && onButtonClick(item)}
              >
                신청
              </WhiteSquareButton>
            </TableBodyItem>
          </StyledBodyRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default SubjectTable;
