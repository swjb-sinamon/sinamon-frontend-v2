import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Heading2 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { Gap } from '../../utils/Gap';
import { SubjectType } from '../../types/ApiResponse';
import Api from '../../apis';
import Pagination from '../../components/Pagination';
import AdminSubjectTable from '../../components/Subject/AdminSubjectTable';
import { Button } from '../../atoms/Button';
import { downloadFile } from '../../utils/FileDownload';
import Modal from '../../components/Modal';
import CreateSubjectForm from '../../components/Subject/CreateSubjectForm';

const ButtonGroup = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

export interface CreateSubjectFormData {
  readonly name: string;
  readonly description: string;
  readonly maxPeople: number;
  readonly type: 'ORDER' | 'RANDOM';
  readonly applicationType: 'MAJOR_SUBJECT' | 'SELECT_SUBJECT';
}

const AdminSubjectPage: React.FC = () => {
  const { register, formState, handleSubmit, reset } = useForm<CreateSubjectFormData>();

  const [api, setApi] = useState<{ data: SubjectType[]; count: number }>({ data: [], count: 0 });
  const [page, setPage] = useState<number>(1);

  const [open, setOpen] = useState<boolean>(false);

  const fetchData = (p: number) => {
    Api.get(`/subject?limit=10&offset=${p}&search=`).then((res) => {
      setApi({
        data: res.data.data,
        count: res.data.count
      });
    });
  };

  const onCsvDownloadClick = () => {
    Api.get('/subject/csv').then((res) => {
      const date = new Date().toLocaleDateString().replace(/ /g, '');
      downloadFile(res.data.data, `${date}-subject.csv`);
    });
  };

  const onCreateClick: SubmitHandler<CreateSubjectFormData> = (data) => {
    Api.post('/subject', {
      name: data.name,
      description: data.description,
      type: data.type,
      applicationType: data.applicationType,
      maxPeople: data.maxPeople
    }).then(() => {
      toast.success('과목을 추가하였습니다.');
      fetchData(1);

      setOpen(false);
      reset();
    });
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <>
      <Helmet>
        <title>과목 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="school" symbol="🏫" /> 과목 관리
        </Heading2>

        <Gap gap={32} />

        <ButtonGroup>
          <Button onClick={() => setOpen(true)}>과목 추가</Button>
          <Button onClick={onCsvDownloadClick}>CSV 다운로드</Button>
        </ButtonGroup>

        <Gap gap={32} />

        <AdminSubjectTable data={api.data} />

        <Gap gap={32} />

        <Pagination onPageChange={fetchData} dataCount={api.count} pageLimit={10} page={page} setPage={setPage} />
      </DefaultLayout>

      <Modal name="addSubject" open={open} setOpen={setOpen} title="과목 추가하기" height={650}>
        <CreateSubjectForm
          register={register}
          formState={formState}
          handleSubmit={handleSubmit}
          onCreateClick={onCreateClick}
        />
      </Modal>
    </>
  );
};

export default AdminSubjectPage;
