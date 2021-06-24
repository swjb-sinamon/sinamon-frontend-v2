import styled from '@emotion/styled';
import React from 'react';

const CheckboxStyle = styled.input`
  transform: scale(1.3);
`;

export const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<unknown>>((props, ref) => {
  return <CheckboxStyle type="checkbox" ref={ref} {...props} />;
});
