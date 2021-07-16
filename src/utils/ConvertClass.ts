export type DepartmentType = 1 | 2 | 3 | 4 | 5;
export type ClazzType = 1 | 2;
export type FullClassType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const convertClassToFullClass = (department: DepartmentType, clazz: ClazzType): FullClassType => {
  if (department === 1 && clazz === 1) return 1;
  if (department === 1 && clazz === 2) return 2;

  if (department === 2 && clazz === 1) return 3;
  if (department === 2 && clazz === 2) return 4;

  if (department === 3 && clazz === 1) return 5;
  if (department === 3 && clazz === 2) return 6;

  if (department === 4 && clazz === 1) return 7;
  if (department === 4 && clazz === 2) return 8;

  if (department === 5 && clazz === 1) return 9;

  return 9;
};
