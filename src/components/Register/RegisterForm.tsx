import React from 'react';
import { Control, FormState, UseFormRegister } from 'react-hook-form/dist/types/form';
import { Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Label } from '../../atoms/Form/Label';
import { Gap } from '../../utils/Gap';
import { Input } from '../../atoms/Form/Input';
import InputError from '../Form/InputError';
import { Radio } from '../../atoms/Form/Radio';
import { Checkbox } from '../../atoms/Form/Checkbox';
import { RegisterFormType } from '../../pages/RegisterPage';

const RadioGroup = styled.div`
  & > input {
    margin-right: 8px;
  }

  & > input:last-child {
    margin-right: 0;
  }
`;

const CheckboxGroup = styled.div`
  & > a {
    margin-right: 8px;
  }
`;

interface RegisterFormProps<T> {
  readonly register: UseFormRegister<T>;
  readonly formState: FormState<T>;
  readonly control: Control<T>;
}

const NAME_REGEXP = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/g;

const RegisterForm: React.FC<RegisterFormProps<RegisterFormType>> = ({ register, formState: { errors }, control }) => {
  return (
    <>
      <div>
        <Label htmlFor="id">아이디</Label>
        <Gap gap={4} />
        <Input id="id" type="text" autoFocus {...register('id', { required: true })} />
        <InputError formError={errors.id} type="required">
          아이디 칸이 비어있습니다.
        </InputError>

        <Gap gap={16} />

        <Label htmlFor="password">비밀번호 (6자리 이상)</Label>
        <Gap gap={4} />
        <Input id="password" type="password" {...register('password', { required: true, minLength: 6 })} />
        <InputError formError={errors.password} type="required">
          비밀번호 칸이 비어있습니다.
        </InputError>
        <InputError formError={errors.password} type="minLength">
          비밀번호는 6자리 이상이어야 합니다.
        </InputError>

        <Gap gap={16} />

        <Label htmlFor="passwordC">비밀번호 확인</Label>
        <Gap gap={4} />
        <Input id="passwordC" type="password" {...register('passwordConfirm', { required: true })} />
        <InputError formError={errors.passwordConfirm} type="required">
          비밀번호 확인 칸이 비어있습니다.
        </InputError>

        <Gap gap={16} />

        <Label htmlFor="name">이름</Label>
        <Gap gap={4} />
        <Input id="name" type="text" {...register('name', { required: true, pattern: NAME_REGEXP })} />
        <InputError formError={errors.name} type="required">
          이름 칸이 비어있습니다.
        </InputError>
        <InputError formError={errors.name} type="pattern">
          이름은 한글, 영어만 가능합니다.
        </InputError>

        <Gap gap={16} />

        <Label htmlFor="code">인증코드</Label>
        <Gap gap={4} />
        <Input id="code" type="text" {...register('code', { required: true })} />
        <InputError formError={errors.code} type="required">
          인증코드 칸이 비어있습니다.
        </InputError>

        <Gap gap={16} />
      </div>

      <div>
        <Label htmlFor="grade">학년</Label>
        <Gap gap={4} />
        <Controller
          name="grade"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Radio id="grade" name="grade" title="1학년" value="1" />
              <Radio id="grade" name="grade" title="2학년" value="2" />
              <Radio id="grade" name="grade" title="3학년" value="3" />
            </RadioGroup>
          )}
        />
        <InputError formError={errors.grade} type="required">
          학년 칸이 비어있습니다.
        </InputError>

        <Gap gap={16} />

        <Label htmlFor="clazz">반</Label>
        <Gap gap={4} />
        <Controller
          name="clazz"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Radio id="clazz" name="clazz" title="1반" value="1" />
              <Radio id="clazz" name="clazz" title="2반" value="2" />
            </RadioGroup>
          )}
        />
        <InputError formError={errors.clazz} type="required">
          반 칸이 비어있습니다.
        </InputError>

        <Gap gap={16} />

        <Label htmlFor="studentNumber">번호</Label>
        <Gap gap={4} />
        <Input
          id="studentNumber"
          type="number"
          {...register('studentNumber', { required: true, min: 1, max: 29, value: 1 })}
        />
        <InputError formError={errors.studentNumber} type="required">
          번호 칸이 비어있습니다.
        </InputError>

        <Gap gap={16} />
      </div>

      <div>
        <CheckboxGroup>
          <Link to="/privacy" target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            개인정보처리방침 동의 (필수)
          </Link>
          <Controller
            name="privacy"
            control={control}
            defaultValue="false"
            render={({ field }) => <Checkbox {...field} />}
          />
        </CheckboxGroup>

        <CheckboxGroup>
          <Link to="/tos" target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            수정과 이용약관 동의 (필수)
          </Link>
          <Controller
            name="tos"
            control={control}
            defaultValue="false"
            render={({ field }) => <Checkbox {...field} />}
          />
        </CheckboxGroup>
      </div>
    </>
  );
};

export default RegisterForm;
