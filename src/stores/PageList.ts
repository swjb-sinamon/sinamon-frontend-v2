import { faCalendarWeek, faSchool, faStickyNote, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React from 'react';
import MealPage from '../pages/MealPage';
import TimetablePage from '../pages/TimetablePage';
import CalendarPage from '../pages/CalendarPage';
import AnonymousPage from '../pages/AnonymousPage';
import MyPage from '../pages/MyPage';
import MainPage from '../pages/MainPage';
import AdminMainPage from '../pages/admin/AdminMainPage';

interface PageListType {
  readonly name: string;
  readonly path: string;
  readonly icon?: IconDefinition;
  readonly component: React.FC;
  readonly onlyRouter?: boolean;
  readonly permissions?: Array<'admin' | 'teacher' | 'schoolunion'>;
}

export const PageList: PageListType[] = [
  {
    name: '메인',
    path: '/',
    component: MainPage,
    onlyRouter: true
  },
  {
    name: '급식',
    path: '/meal',
    component: MealPage,
    icon: faUtensils
  },
  {
    name: '시간표',
    path: '/timetable',
    component: TimetablePage,
    icon: faCalendarWeek
  },
  {
    name: '학사일정',
    path: '/calendar',
    component: CalendarPage,
    icon: faSchool
  },
  {
    name: '익명건의함',
    path: '/anonymous',
    component: AnonymousPage,
    icon: faStickyNote
  },
  {
    name: '내 계정',
    path: '/me',
    component: MyPage,
    onlyRouter: true
  }
];

export const AdminPageList: PageListType[] = [
  {
    name: '어드민 메인',
    path: '/admin',
    component: AdminMainPage,
    onlyRouter: true,
    permissions: ['admin', 'teacher', 'schoolunion']
  }
];
