import styled from '@emotion/styled';

export const Button = styled.button<{ fontSize?: '14' | '16' }>`
  padding: 8px 16px;

  background-color: var(--color-button);
  color: white;

  border: none;

  border-radius: 4px;

  font-size: ${(props) => props.fontSize || '16'}px;

  cursor: pointer;

  &:hover {
    background-color: var(--color-button-hover);
  }

  &:disabled {
    background-color: var(--color-disabled);
    color: #e7e7e7;
    cursor: no-drop;
  }
`;

export const WhiteSquareButton = styled.button<{ size?: number }>`
  width: ${(props) => props.size || '32'}px;
  height: ${(props) => props.size || '32'}px;

  background: white;

  border-radius: 4px;
  border: 1px solid var(--color-gray);

  cursor: pointer;

  &:hover {
    background-color: var(--color-button-hover);
    color: white;
  }

  &:disabled {
    background-color: var(--color-disabled);
    color: #e7e7e7;
    cursor: no-drop;
  }
`;
