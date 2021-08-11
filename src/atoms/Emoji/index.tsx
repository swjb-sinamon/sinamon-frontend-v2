import React from 'react';

interface EmojiProps {
  readonly label: string;
  readonly symbol: string;
}

const Emoji: React.FC<EmojiProps> = ({ label, symbol }) => {
  return (
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  );
};
export default Emoji;
