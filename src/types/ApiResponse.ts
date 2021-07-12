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
