import styled from '@emotion/styled';

export const Textarea = styled.textarea<{ notResize?: boolean }>`
  padding: 8px;

  background-color: white;
  font-family: 'Noto Sans KR', sans-serif;

  border-radius: 4px;
  border: 1px solid var(--color-gray);

  font-size: 14px;

  ${(props) => (props.notResize ? 'resize: none;' : '')}

  &:disabled {
    cursor: no-drop;
    background-color: var(--color-disabled);
  }
`;
