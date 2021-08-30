export interface ProfileType {
  readonly uuid: string;
  readonly id: string;
  readonly name: string;
  readonly department: number;
  readonly studentGrade: number;
  readonly studentClass: number;
  readonly studentNumber: number;
  readonly password: null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly permission: {
    readonly isAdmin: boolean;
    readonly isTeacher: boolean;
    readonly isSchoolUnion: boolean;
  };
}

export interface DustType {
  readonly pm10: number;
  readonly pm25: number;
}

export interface WeatherType {
  readonly status: Capitalize<string>;
  readonly temp: number;
}

export interface ComciganTimetableType {
  readonly grade: number;
  readonly class: number;
  readonly weekday: number;
  readonly weekdayString: string;
  // eslint-disable-next-line camelcase
  readonly class_time: number;
  readonly code: string;
  readonly teacher: string;
  readonly subject: string;
  readonly url: string;
}

export interface ApiAnonymous {
  readonly title: string;
  readonly content: string;
}

export interface CodeType {
  readonly id: number;
  readonly code: string;
  readonly isUse: boolean;
  readonly useAt: Date | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface SubjectType {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly type: 'SELECT_SUBJECT' | 'MAJOR_SUBJECT';
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly subjectData: SubjectDataType;
}

export interface SubjectDataType {
  readonly id: number;
  readonly subjectId: number;
  readonly applicationType: 'ORDER' | 'RANDOM';
  readonly maxPeople: number;
  readonly currentPeople: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ApplicationType {
  readonly id: number;
  readonly subjectId: number;
  readonly subject: SubjectType;
  readonly userId: number;
  readonly user: {
    readonly id: string;
    readonly name: string;
    readonly department: number;
    readonly studentGrade: number;
    readonly studentClass: number;
    readonly studentNumber: number;
  };
  readonly status: 'WAITING' | 'SUCCESS' | 'NONE';
  readonly priority: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}


export interface ClubType {
  readonly uuid: string;
  readonly id: string;
  readonly name: string;
  readonly department: number;
  readonly studentGrade: number;
  readonly studentClass: number;
  readonly studentNumber: number;
  readonly password: null;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly permission: {
    readonly isAdmin: boolean;
    readonly isTeacher: boolean;
    readonly isSchoolUnion: boolean;
  };
}
