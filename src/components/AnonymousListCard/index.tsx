import React from 'react';
import styled from '@emotion/styled';
import ReactTooltip from 'react-tooltip';
import { Gap } from '../../utils/Gap';
import { Heading3 } from '../../atoms/Typography/Heading';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 200px;
  height: 240px;

  border-radius: 24px;
  background-color: white;

  padding: 1rem 1.4rem;
`;

const Title = styled(Heading3)`
  color: var(--color-main);
`;

const Contents = styled.p`
  font-size: 14px;
  line-height: 160%;
`;

const ReplyContent = styled.p`
  width: 100%;

  font-size: 14px;
  color: var(--color-subtext);

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  margin-bottom: 0.6rem;
`;

interface AnonymousListCardProps {
  readonly id: number;
  readonly title: string;
  readonly contents: string;
  readonly reply: string;
}

const AnonymousListCard: React.FC<AnonymousListCardProps> = ({ id, title, contents, reply }) => {
  return (
    <Box>
      <div>
        <Title>{title} </Title>
        <Gap gap={16} />

        <Contents>{contents}</Contents>
      </div>
      <div>
        <ReplyContent data-tip data-for={`full-reply-${id}`}>
          → {reply}
        </ReplyContent>
        <ReactTooltip id={`full-reply-${id}`} place="right">
          {reply}
        </ReactTooltip>
      </div>
    </Box>
  );
};

export default AnonymousListCard;
