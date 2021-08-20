import React from 'react';
// import styled from '@emotion/styled'
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layouts/DefaultLayout';
// import Api from '../../apis'
// import { ProfileType } from '../../types/ApiResponse';

// import { Input } from '../../atoms/Form/Input';
import { Heading2 } from '../../atoms/Typography/Heading';
import Emoji from '../../atoms/Emoji';

const UserPage: React.FC = () => {
  // const [data, setData] = useState<ProfileType>([]);
  // const [count, setCount] = useState<number>(0);

  // const [department, setDepartment] = useState<number>(0);
  // const [Class, setClass] = useState<string>('');

  // const fetchData = useCallback(
  //     (page: number, searchValue)=>{
  //         const depQuery = department ? `&filters[department]=${department}` : '';
  //         const gradeAndClass = Class ? Class.split('-') : [];
  //         const gradeQuery = Class ? `&filters[grade]=${gradeAndClass[0]}` : '';
  //         const classQuery = Class ? `&filters[Class]=${gradeAndClass[1]}` : '';

  //         Api.get(
  //             `/auth/user?limit=30&offset=${page}&search=${searchValue}${depQuery}${gradeQuery}${classQuery}`
  //           ).then((res) => {
  //             setData(res.data.data);
  //             setCount(res.data.count);
  //           });
  //     },
  //     [department, Class]
  // );

  // useEffect(() => {
  //     fetchData(1, '');
  //   }, [fetchData]);

  return (
    <>
      <Helmet>
        <title>유저 관리 - 수정과 어드민</title>
      </Helmet>

      <DefaultLayout isAdmin>
        <Heading2>
          <Emoji label="people" symbol="🧑‍🤝‍🧑" /> 유저 관리
        </Heading2>
        
      </DefaultLayout>
    </>
  );
};

export default UserPage;
