import {
  faBullhorn,
  faCalendarWeek,
  faCog,
  faKey,
  faSchool,
  faStickyNote,
  faUtensils,
  faUsers,
  faChalkboard
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React from 'react';
import MealPage from '../pages/MealPage';
import TimetablePage from '../pages/TimetablePage';
import CalendarPage from '../pages/CalendarPage';
import AnonymousPage from '../pages/AnonymousPage';
import MyPage from '../pages/MyPage';
import MainPage from '../pages/MainPage';
import AdminMainPage from '../pages/admin/AdminMainPage';
import AdminNoticePage from '../pages/admin/AdminNoticePage';
import AdminCodePage from '../pages/admin/AdminCodePage';
import AdminUserPage from '../pages/admin/AdminUserPage';
import SubjectPage from '../pages/SubjectPage';
import ApplicationPage from '../pages/ApplicationPage';
import AdminSubjectPage from '../pages/admin/AdminSubjectPage';

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
    name: '교과 신청',
    path: '/subject',
    component: SubjectPage,
    icon: faChalkboard
  },
  {
    name: '지원 현황',
    path: '/application',
    component: ApplicationPage,
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
    icon: faCog,
    permissions: ['admin', 'teacher', 'schoolunion']
  },
  {
    name: '공지사항 관리',
    path: '/admin/notice',
    component: AdminNoticePage,
    icon: faBullhorn,
    permissions: ['admin', 'teacher']
  },
  {
    name: '인증코드 관리',
    path: '/admin/code',
    component: AdminCodePage,
    icon: faKey,
    permissions: ['admin', 'teacher']
  },
  {
    name: '유저 관리',
    path: '/admin/user',
    component: AdminUserPage,
    icon: faUsers,
    permissions: ['admin', 'teacher']
  },
  {
    name: '과목 관리',
    path: '/admin/subject',
    component: AdminSubjectPage,
    icon: faSchool,
    permissions: ['admin', 'teacher']
  }
];
