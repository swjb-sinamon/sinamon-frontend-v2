import React from 'react';
import { FormState, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form/dist/types/form';
import { SubmitHandler } from 'react-hook-form';
import { Label } from '../../atoms/Form/Label';
import { Gap } from '../../utils/Gap';
import { Input } from '../../atoms/Form/Input';
import { Select } from '../../atoms/Form/Select';
import { Button } from '../../atoms/Button';
import { CreateSubjectFormData } from '../../pages/admin/AdminSubjectPage';
import InputError from '../Form/InputError';

interface CreateSubjectFormProps<T> {
  readonly register: UseFormRegister<T>;
  readonly formState: FormState<T>;
  readonly handleSubmit: UseFormHandleSubmit<T>;
  readonly onCreateClick: SubmitHandler<T>;
}

const CreateSubjectForm: React.FC<CreateSubjectFormProps<CreateSubjectFormData>> = ({
  register,
  formState: { errors },
  handleSubmit,
  onCreateClick
}) => {
  return (
    <>
      <Label htmlFor="name">과목 이름</Label>
      <Gap gap={4} />
      <Input type="text" id="name" autoFocus {...register('name', { required: true })} />
      <InputError formError={errors.name} type="required">
        이름 칸이 비어있습니다.
      </InputError>

      <Gap gap={16} />

      <Label htmlFor="description">과목 설명</Label>
      <Gap gap={4} />
      <Input type="text" id="description" {...register('description', { required: true })} />
      <InputError formError={errors.description} type="required">
        설명 칸이 비어있습니다.
      </InputError>

      <Gap gap={16} />

      <Label htmlFor="maxPeople">최대 인원</Label>
      <Gap gap={4} />
      <Input type="number" id="maxPeople" {...register('maxPeople', { required: true })} />
      <InputError formError={errors.maxPeople} type="required">
        촤대 인원이 비어있습니다.
      </InputError>

      <Gap gap={16} />

      <Label htmlFor="type">종류</Label>
      <Gap gap={4} />
      <Select {...register('type', { required: true })}>
        <option value="MAJOR_SUBJECT">전공 코스</option>
        <option value="SELECT_SUBJECT">선택 과목</option>
      </Select>

      <Gap gap={16} />

      <Label htmlFor="applicationType">추첨 방식</Label>
      <Gap gap={4} />
      <Select {...register('applicationType', { required: true })}>
        <option value="ORDER">선착순</option>
        <option value="RANDOM">무작위 추첨</option>
      </Select>

      <Gap gap={32} />

      <Button onClick={handleSubmit(onCreateClick)}>추가하기</Button>
    </>
  );
};

export default CreateSubjectForm;
