import React from 'react';
import { Wrap, Container } from './styles';

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
