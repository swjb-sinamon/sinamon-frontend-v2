type ReturnType = '좋음' | '보통' | '나쁨' | '매우나쁨' | '알수없음';

export const convertPm10ToString = (value: number): [ReturnType] => {
  if (value >= 0 && value <= 30) return ['좋음'];
  if (value >= 31 && value <= 80) return ['보통'];
  if (value >= 81 && value <= 150) return ['나쁨'];
  if (value >= 151) return ['매우나쁨'];
  return ['알수없음'];
};

export const convertPm25ToString = (value: number): [ReturnType] => {
  if (value >= 0 && value <= 15) return ['좋음'];
  if (value >= 16 && value <= 50) return ['보통'];
  if (value >= 51 && value <= 100) return ['나쁨'];
  if (value >= 101) return ['매우나쁨'];
  return ['알수없음'];
};
