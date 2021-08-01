import React from 'react';
import styled from '@emotion/styled';
import { Controller, UseFormGetValues } from 'react-hook-form';
import { Control, FormState, UseFormRegister } from 'react-hook-form/dist/types/form';
import { Gap } from '../../utils/Gap';
import { Label } from '../../atoms/Form/Label';
import InputError from '../../components/Form/InputError';
import { Radio } from '../../atoms/Form/Radio';
import { Input } from '../../atoms/Form/Input';
import { MyPageFormType } from '../../pages/MyPage';
import { ProfileType } from '../../types/ApiResponse';

const RadioGroup = styled.div`
  & > input {
    margin-right: 8px;
  }

  & > input:last-child {
    margin-right: 0;
  }
`;

interface MyPageFormProps<T> {
  readonly register: UseFormRegister<T>;
  readonly formState: FormState<T>;
  readonly control: Control<T>;
  readonly getValues: UseFormGetValues<T>;
  readonly profile: ProfileType;
}

const MyPageForm: React.FC<MyPageFormProps<MyPageFormType>> = ({
  register,
  control,
  formState: { errors },
  getValues,
  profile
}) => {
  const { id, studentGrade, studentClass, studentNumber } = profile;

  return (
    <>
      <Label htmlFor="id">아이디</Label>
      <Gap gap={4} />
      <Input name="id" type="text" value={id} disabled />

      <Gap gap={16} />

      <Label htmlFor="grade">학년</Label>
      <Gap gap={4} />
      <Controller
        name="grade"
        control={control}
        rules={{ required: true }}
        defaultValue={studentGrade}
        render={({ field }) => (
          <RadioGroup {...field}>
            <Radio id="grade" name="grade" title="1학년" value="1" defaultChecked={studentGrade === 1} />
            <Radio id="grade" name="grade" title="2학년" value="2" defaultChecked={studentGrade === 2} />
            <Radio id="grade" name="grade" title="3학년" value="3" defaultChecked={studentGrade === 3} />
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
        defaultValue={studentClass}
        render={({ field }) => (
          <RadioGroup {...field}>
            <Radio id="clazz" name="clazz" title="1반" value="1" defaultChecked={studentClass === 1} />
            <Radio id="clazz" name="clazz" title="2반" value="2" defaultChecked={studentClass === 2} />
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
        {...register('studentNumber', { required: true, min: 1, max: 29, value: studentNumber })}
      />
      <InputError formError={errors.studentNumber} type="required">
        번호 칸이 비어있습니다.
      </InputError>

      <Gap gap={16} />

      <Label htmlFor="password">새 비밀번호 (6자리 이상)</Label>
      <Gap gap={4} />
      <Input id="password" type="password" {...register('newPassword', { required: false, minLength: 6 })} />
      <InputError formError={errors.newPassword} type="minLength">
        비밀번호는 6자리 이상이어야 합니다.
      </InputError>

      <Gap gap={16} />

      <Label htmlFor="passwordC">비밀번호 확인</Label>
      <Gap gap={4} />
      <Input
        id="passwordC"
        type="password"
        {...register('passwordConfirm', {
          required: getValues('newPassword')
        })}
      />
      <InputError formError={errors.passwordConfirm} type="required">
        비밀번호 확인 칸이 비어있습니다.
      </InputError>
    </>
  );
};

export default MyPageForm;
