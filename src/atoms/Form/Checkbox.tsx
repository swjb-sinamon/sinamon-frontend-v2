import styled from '@emotion/styled';
import React from 'react';

const CheckboxStyle = styled.input`
  transform: scale(1.3);
`;

export const Checkbox: React.FC<React.InputHTMLAttributes<unknown>> = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CheckboxStyle type="checkbox" {...props} />;
};
