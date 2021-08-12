import { faCalendarWeek, faSchool, faStickyNote, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React from 'react';
import MealPage from '../pages/MealPage';
import TimetablePage from '../pages/TimetablePage';
import CalendarPage from '../pages/CalendarPage';
import AnonymousPage from '../pages/AnonymousPage';
import MyPage from '../pages/MyPage';

interface PageListType {
  readonly name: string;
  readonly path: string;
  readonly icon?: IconDefinition;
  readonly component: React.FC;
  readonly onlyRouter?: boolean;
}

export const PageList: PageListType[] = [
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
