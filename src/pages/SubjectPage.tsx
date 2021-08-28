import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../layouts/DefaultLayout';
import { Heading2, Heading3 } from '../atoms/Typography/Heading';
import Emoji from '../atoms/Emoji';
import { Gap } from '../utils/Gap';
import Api from '../apis';
import { Button } from '../atoms/Button';
import SubjectTable from '../components/Subject/SubjectTable';
import { SubjectType } from '../types/ApiResponse';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

const ButtonGroup = styled.div`
  & > button {
    margin-right: 8px;
  }

  & > button:last-child {
    margin-right: 0;
  }
`;

const ModalContent = styled.div`
  min-height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubjectPage: React.FC = () => {
  const history = useHistory();

  const [api, setApi] = useState<{ data: SubjectType[]; count: number }>({ data: [], count: 0 });
  const [page, setPage] = useState<number>(1);

  const [open, setOpen] = useState<boolean>(false);
  const [helpOpen, setHelpOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<number>(0);

  const fetchData = (p: number) => {
    Api.get(`/subject?limit=10&offset=${p}&search=`).then((res) => {
      setApi({
        data: res.data.data,
        count: res.data.count
      });
    });
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const onButtonClick = (data: SubjectType) => {
    if (data.subjectData.applicationType === 'RANDOM') {
      setOpen(true);
      setModalData(data.id);
      return;
    }

    // eslint-disable-next-line no-restricted-globals,no-alert
    const accept = confirm('선착순으로 진행되는 과목입니다. 신청을 진행할까요?');
    if (accept) {
      Api.post('/application', {
        subjectId: data.id
      }).then(() => {
        toast.success(`과목 신청이 완료되었습니다!`);
        fetchData(1);
      });
    }
  };

  const onApplicationClick = (id: number, priority: number) => {
    Api.post('/application', {
      subjectId: id,
      priority
    }).then(() => {
      setOpen(false);
      toast.success(`과목 신청이 완료되었습니다! 추첨을 기다려주세요.`);
      fetchData(1);
    });
  };

  return (
    <>
      <Helmet>
        <title>교과 신청 - 수정과</title>
      </Helmet>
      <DefaultLayout>
        <Heading2>
          <Emoji label="school" symbol="🏫" /> 교과 신청
        </Heading2>

        <Gap gap={32} />

        <ButtonGroup>
          <Button onClick={() => history.push('/application')}>신청한 과목 보기</Button>
          <Button onClick={() => setHelpOpen(true)}>도움말</Button>
        </ButtonGroup>

        <Gap gap={16} />

        <Heading3>개설된 과목</Heading3>
        <Gap gap={8} />
        <SubjectTable data={api.data} onButtonClick={onButtonClick} />

        <Gap gap={32} />

        <Pagination onPageChange={fetchData} dataCount={api.count} pageLimit={10} page={page} setPage={setPage} />
      </DefaultLayout>

      <Modal
        name="selectSubject"
        open={open}
        setOpen={setOpen}
        title="교과 신청하기"
        subtitle="지망을 선택해주세요."
        height={400}
      >
        <ModalContent>
          <p>
            해당 과목은 <b>무작위 추첨</b>으로 진행되는 과목입니다.
          </p>
          <p>한 과목당 중복 지원이 불가능합니다.</p>

          <Gap gap={16} />

          <ButtonGroup>
            <Button onClick={() => onApplicationClick(modalData, 1)}>1지망으로 지원</Button>
            <Button onClick={() => onApplicationClick(modalData, 2)}>2지망으로 지원</Button>
            <Button onClick={() => onApplicationClick(modalData, 3)}>3지망으로 지원</Button>
          </ButtonGroup>
        </ModalContent>
      </Modal>

      <Modal name="subjectHelp" open={helpOpen} setOpen={setHelpOpen} title="도움말">
        도움말
      </Modal>
    </>
  );
};

export default SubjectPage;
