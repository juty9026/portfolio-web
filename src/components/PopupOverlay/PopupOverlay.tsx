import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  cursor: pointer;
  overflow-y: scroll;
`;

const Container = styled.div`
  margin: 5vh 10vw 5vh 10vw;
  background-color: #0a192f;
  min-height: 150vh;
  cursor: auto;
  z-index: 30;
`;

interface Props {
  onClickOutside?: React.MouseEventHandler;
  onKeyDown?: (ev: KeyboardEvent) => any;
}

const PopupOverlay: React.FC<Props> = ({ onClickOutside, onKeyDown, children }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (onKeyDown) window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      if (onKeyDown) window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <Wrap
      id="overlay"
      onClick={(e) => {
        if (onClickOutside && e.currentTarget === e.target) {
          onClickOutside(e);
        }
      }}
    >
      <Container>{children}</Container>
    </Wrap>
  );
};

export default PopupOverlay;
