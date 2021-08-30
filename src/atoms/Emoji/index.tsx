import React from 'react';
import styled from '@emotion/styled';

const StyledEmoji = styled.span`
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
`;

interface EmojiProps {
  readonly label: string;
  readonly symbol: string;
}

const Emoji: React.FC<EmojiProps> = ({ label, symbol }) => {
  return (
    <StyledEmoji role="img" aria-label={label}>
      {symbol}
    </StyledEmoji>
  );
};
export default Emoji;
