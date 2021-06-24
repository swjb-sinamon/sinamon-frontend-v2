import React from 'react';
import { FieldError } from 'react-hook-form';
import styled from '@emotion/styled';

const InputError = styled.p`
  color: var(--color-error);
  font-size: 12px;
  margin-top: 4px;
`;

interface RequiredInputErrorProps {
  readonly formError: FieldError | undefined;
}

const RequiredInputError: React.FC<RequiredInputErrorProps> = ({ formError, children }) => {
  return <>{formError?.type === 'required' && <InputError>{children}</InputError>}</>;
};

export default RequiredInputError;
