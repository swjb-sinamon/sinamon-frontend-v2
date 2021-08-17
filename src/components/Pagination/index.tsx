import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { WhiteSquareButton } from '../../atoms/Button';

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  & > button {
    margin-right: 4px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const PaginationMoveItem = styled(WhiteSquareButton)<{ hidden?: boolean }>`
  display: ${(props) => (props.hidden ? 'none' : 'block')};

  width: 52px;
`;

const StyledPaginationItem = styled(WhiteSquareButton)<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? 'var(--color-button)' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
`;

interface PaginationProps {
  readonly onPageChange: (page: number) => void;
  readonly dataCount: number;
  readonly pageLimit: number;
  readonly page: number;
  readonly setPage: Dispatch<SetStateAction<number>>;
}

const PAGE_PER_GROUP = 10; // 한 그룹당 표시되는 페이지 개수

const Pagination: React.FC<PaginationProps> = ({ onPageChange, dataCount, pageLimit, page, setPage }) => {
  const [pageGroup, setPageGroup] = useState<number>(1);

  const pageCount = useMemo(() => Math.ceil(dataCount / pageLimit), [dataCount, pageLimit]); // 페이지 개수
  const groupCount = useMemo(() => Math.ceil(pageCount / PAGE_PER_GROUP), [pageCount]); // 그룹 개수

  const onPrevClick = () => {
    setPageGroup((current) => {
      const prevOffset = (current - 1) * PAGE_PER_GROUP;
      setPage(prevOffset);
      onPageChange(prevOffset);
      return current - 1;
    });
  };

  const onNextClick = () => {
    setPageGroup((current) => {
      const nextOffset = current * PAGE_PER_GROUP + 1;
      setPage(nextOffset);
      onPageChange(nextOffset);
      return current + 1;
    });
  };

  const NumberButtons = () => {
    const result = [];

    for (let i = (pageGroup - 1) * PAGE_PER_GROUP; i < Math.min(pageCount, pageGroup * PAGE_PER_GROUP); i++) {
      result.push(
        <StyledPaginationItem
          key={i + 1}
          onClick={() => {
            setPage(i + 1);
            onPageChange(i + 1);
          }}
          active={i + 1 === page}
        >
          {i + 1}
        </StyledPaginationItem>
      );
    }

    return result;
  };

  return (
    <PageWrapper>
      <PaginationMoveItem onClick={onPrevClick} hidden={pageGroup === 1}>
        <FontAwesomeIcon icon={faAngleLeft} /> 이전
      </PaginationMoveItem>

      {NumberButtons().map((i) => i)}

      <PaginationMoveItem onClick={onNextClick} hidden={pageGroup === groupCount}>
        다음 <FontAwesomeIcon icon={faAngleRight} />
      </PaginationMoveItem>
    </PageWrapper>
  );
};

export default Pagination;
