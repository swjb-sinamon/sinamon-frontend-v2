import styled from '@emotion/styled';

export const Input = styled.input<{ width?: number }>`
  width: ${(props) => props.width || 300}px;
  height: 40px;

  background-color: white;
  padding-left: 16px;

  border-radius: 4px;
  border: 1px solid var(--color-gray);

  &:disabled {
    cursor: no-drop;
    background-color: var(--color-disabled);
  }
`;
