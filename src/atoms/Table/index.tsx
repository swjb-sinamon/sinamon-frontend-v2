import styled from '@emotion/styled';
import React from 'react';

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
`;

export const TableContainer: React.FC = ({ children }) => {
  return (
    <TableWrapper>
      <StyledTable>{children}</StyledTable>
    </TableWrapper>
  );
};

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

export const TableHeaderRow = styled.tr`
  text-align: left;
  background-color: var(--color-gray);
`;

export const TableBodyRow = styled.tr`
  background-color: white;

  border-bottom: 1px solid var(--color-gray);

  &:last-child {
    border: none;
  }
`;

export const TableHeaderItem = styled.th`
  font-size: 16px;
  font-weight: bold;

  padding: 0.8rem 1.2rem;
`;

export const TableBodyItem = styled.td`
  font-size: 14px;
  padding: 0.8rem 1.2rem;
`;
