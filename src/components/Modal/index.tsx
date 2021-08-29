import React from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading2, Heading3 } from '../../atoms/Typography/Heading';
import { Gap } from '../../utils/Gap';
import { Breakpoints, makeMediaQuery } from '../../styles/Breakpoint';

const StyledModal = styled(ReactModal)<{ width?: number; height?: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${(props) => props.width || 600}px;
  height: ${(props) => props.height || 500}px;

  border: none;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.4rem 1.8rem;

  &:focus {
    outline: none;
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    overflow-x: auto;

    position: absolute;
    top: 100%;
    transform: translate(-50%, -100%);

    width: 100%;
    height: 70%;

    border-radius: 20px 20px 0 0;
  }
`;

const CancelButton = styled.div`
  position: absolute;
  top: 8px;
  right: -28px;

  color: white;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-button-hover);
  }

  ${makeMediaQuery(Breakpoints.MD)} {
    top: 16px;
    right: 20px;
    color: black;
  }
`;

const StyledHeading = styled(Heading2)`
  color: var(--color-main);
`;

interface ModalProps {
  readonly className?: string;
  readonly width?: number;
  readonly height?: number;
  readonly name: string;
  readonly open: boolean;
  readonly setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  readonly title: string;
  readonly subtitle?: string;
}

const Modal: React.FC<ModalProps> = ({ className, width, height, name, open, setOpen, title, subtitle, children }) => {
  return (
    <StyledModal
      className={className}
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      contentLabel={name}
      width={width}
      height={height}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }
      }}
    >
      <CancelButton tabIndex={0} role="button" aria-label="닫기" aria-pressed="false" onClick={() => setOpen(false)}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </CancelButton>

      <div>
        <StyledHeading>{title}</StyledHeading>
        {subtitle && <Heading3>{subtitle}</Heading3>}
      </div>

      <Gap gap={16} />

      <div>{children}</div>
    </StyledModal>
  );
};

export default Modal;
