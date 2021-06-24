import React from 'react';
import { FieldError } from 'react-hook-form';
import { InputError } from '../../atoms/Typography/Error';

interface RequiredInputErrorProps {
  readonly formError: FieldError | undefined;
}

const RequiredInputError: React.FC<RequiredInputErrorProps> = ({ formError, children }) => {
  return <>{formError?.type === 'required' && <InputError>{children}</InputError>}</>;
};

export default RequiredInputError;
