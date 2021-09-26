import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { toast } from 'react-hot-toast';
import Modal from '../Modal';
import { Textarea } from '../../atoms/Form/Textarea';
import { Gap } from '../../utils/Gap';
import { Button } from '../../atoms/Button';
import InputError from '../Form/InputError';
import Api from '../../apis';

const StyledTextarea = styled(Textarea)`
  width: 100%;
`;

interface AnonymousControlModalProps {
  readonly id: number;
  readonly open: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
  readonly controlType: 'add' | 'update';
  readonly onSuccess?: () => void;
}

interface AnonymousControlModalForm {
  readonly reply: string;
}

const AnonymousControlModal: React.FC<AnonymousControlModalProps> = ({ id, open, setOpen, controlType, onSuccess }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset
  } = useForm<AnonymousControlModalForm>();
  const [replyId, setReplyId] = useState<number>(0);

  useEffect(() => {
    if (controlType !== 'update') return;

    Api.get(`/anonymous/${id}`).then((res) => {
      setValue('reply', res.data.data.reply[0].content);
      setReplyId(res.data.data.reply[0].id);
    });
  }, [controlType, id, setValue]);

  const onClick: SubmitHandler<AnonymousControlModalForm> = async (data) => {
    if (controlType === 'add') {
      await addReply(id, data.reply);
    } else {
      await updateReply(data.reply);
    }
  };

  const addReply = async (_id: number, content: string) => {
    await Api.post(`/anonymous/${_id}/reply`, {
      content
    });

    setOpen(false);
    toast.success('답변이 등록되었습니다.');
    onSuccess?.();

    reset();
  };

  const updateReply = async (content: string) => {
    await Api.put(`/anonymous/reply/${replyId}`, {
      content
    });

    setOpen(false);
    toast.success('답변이 수정되었습니다.');
    onSuccess?.();

    reset();
  };

  return (
    <Modal name="anonymousControlModal" title="익명건의함 답변" open={open} setOpen={setOpen} height={440}>
      <StyledTextarea
        rows={12}
        placeholder="최대 400자"
        autoFocus
        {...register('reply', { required: true, maxLength: 400 })}
      />
      <InputError formError={errors.reply} type="required">
        칸이 비어있습니다.
      </InputError>
      <InputError formError={errors.reply} type="maxLength">
        400자가 넘습니다.
      </InputError>

      <Gap gap={16} />
      <Button onClick={handleSubmit(onClick)}>{controlType === 'add' ? '등록하기' : '수정하기'}</Button>
    </Modal>
  );
};

export default AnonymousControlModal;
