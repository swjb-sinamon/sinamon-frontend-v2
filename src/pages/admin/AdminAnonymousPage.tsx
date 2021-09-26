import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { Heading2 } from '../../atoms/Typography/Heading';
import DefaultLayout from '../../layouts/DefaultLayout';
import Emoji from '../../atoms/Emoji';
import { Gap } from '../../utils/Gap';
import AnonymousTable from '../../components/Anonymous/AnonymousTable';
import { ApiAnonymous } from '../../types/ApiResponse';
import Api from '../../apis';
import AnonymousControlModal from '../../components/Anonymous/AnonymousControlModal';

const AdminAnonymousPage: React.FC = () => {
  const [data, setData] = useState<ApiAnonymous[]>([]);

  const [dataId, setDataId] = useState<number>(0);
  const [controlType, setControlType] = useState<'add' | 'update'>('add');
  const [open, setOpen] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    Api.get('/anonymous').then((res) => {
      setData(res.data.data);
    });
  }, []);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <>
      <Helmet>
        <title>익명건의함 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="mailbox" symbol="📫" /> 익명건의함 관리
        </Heading2>

        <Gap gap={32} />

        <AnonymousTable
          data={data}
          onAddReplyClick={(v) => {
            setDataId(v.id);
            setControlType('add');
            setOpen(true);
          }}
          onUpdateReplyClick={(v) => {
            setDataId(v.id);
            setControlType('update');
            setOpen(true);
          }}
          onDeleteReplyClick={async (v) => {
            // eslint-disable-next-line no-restricted-globals,no-alert
            const isDelete = confirm('정말로 삭제할까요? 삭제 후에는 복구할 수 없습니다.');
            if (!isDelete) return;

            await Api.delete(`/anonymous/reply/${v.reply[0].id}`);
            toast.success('답변이 삭제되었습니다.');

            fetchData();
          }}
        />
      </DefaultLayout>

      <AnonymousControlModal
        open={open}
        setOpen={setOpen}
        controlType={controlType}
        id={dataId}
        onSuccess={fetchData}
      />
    </>
  );
};

export default AdminAnonymousPage;
