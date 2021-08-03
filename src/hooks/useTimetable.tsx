import React, { createContext, useContext, useEffect, useState } from 'react';

import { useProfile } from './useProfile';
import { ComciganTimetableType } from '../types/ApiResponse';
import Api from '../apis';
import { ClazzType, convertClassToFullClass, DepartmentType } from '../utils/ConvertClass';

const context = createContext<ComciganTimetableType[][]>([]);

export const TimetableProvider: React.FC = ({ children }) => {
  const profile = useProfile();
  const [timetable, setTimetable] = useState<ComciganTimetableType[][]>([]);

  useEffect(() => {
    if (!profile) return;

    const fullClass = convertClassToFullClass(profile.department as DepartmentType, profile.studentClass as ClazzType);
    Api.get(`/timetable/${profile.studentGrade}/${fullClass}`).then((res) => setTimetable(res.data.data));
  }, [profile]);

  return <context.Provider value={timetable}>{children}</context.Provider>;
};

export const useTimetable = () => useContext(context);
