import React from 'react';
import { FieldError, RegisterOptions } from 'react-hook-form';
import styled from '@emotion/styled';

const Text = styled.p`
  color: var(--color-error);
  font-size: 12px;
  margin-top: 4px;
`;

interface InputErrorProps {
  readonly formError: FieldError | undefined;
  readonly type: keyof RegisterOptions;
}

const InputError: React.FC<InputErrorProps> = ({ formError, type, children }) => {
  return <>{formError?.type === type && <Text>{children}</Text>}</>;
};

export default InputError;
