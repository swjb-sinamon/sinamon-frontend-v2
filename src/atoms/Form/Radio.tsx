import styled from '@emotion/styled';
import React from 'react';

const RadioStyle = styled.input<{ title?: string }>`
  appearance: none;

  width: 40px;
  height: 40px;

  border: 1px solid var(--color-gray);
  border-radius: 50%;

  background-color: #ffffff;
  cursor: pointer;

  &:checked {
    background-color: var(--color-gray);
  }

  &:before {
    content: '${(props) => props.title}';
    display: flex;
    justify-content: center;
    line-height: 40px;
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Radio: React.FC<React.InputHTMLAttributes<unknown> & { title?: string }> = (props, { title }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RadioStyle type="radio" title={title} {...props} />;
};
