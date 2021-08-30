import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import styled from '@emotion/styled';
import DefaultLayout from '../../layouts/DefaultLayout';
import Api from '../../apis';
import ClubTable from '../../components/Club/ClubTable';

const AdminClubManagenmentPage: React.FC = () => {
    const [data, setData] = useState<{ data: [] }>({ data: [] });

    const fetchData = () => {
        Api.get('/auth/admin').then((res) => {
            setData({
                data: res.data.data
            });
        });
    };

    useEffect(() => fetchData(), []);

    return (
        <>
            <Helmet>
                <title>동아리 인원 관리 - 수정과 어드민</title>
            </Helmet>

            <DefaultLayout isAdmin>
                <ClubTable data={data.data} />
            </DefaultLayout>
        </>
    )
}
export default AdminClubManagenmentPage;