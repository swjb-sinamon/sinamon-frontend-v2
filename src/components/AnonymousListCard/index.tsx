import React from 'react';
import styled from '@emotion/styled';
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
  font-size: 14px;
  color: var(--color-subtext);
`;

interface AnonymousListCardProps {
  readonly title: string;
  readonly contents: string;
  readonly reply: string;
}

const AnonymousListCard: React.FC<AnonymousListCardProps> = ({ title, contents, reply }) => {
  return (
    <Box>
      <div>
        <Title>{title} </Title>
        <Gap gap={16} />

        <Contents>{contents}</Contents>
      </div>
      <div>
        <ReplyContent>→ {reply}</ReplyContent>
      </div>
    </Box>
  );
};

export default AnonymousListCard;
