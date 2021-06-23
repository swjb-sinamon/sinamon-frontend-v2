import styled from '@emotion/styled';

export const Gap = styled.div<{ gap: number }>`
  margin-bottom: ${(props) => props.gap}px;
`;
