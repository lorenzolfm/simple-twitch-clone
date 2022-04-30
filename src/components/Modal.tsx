import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  actions: JSX.Element;
  content: string;
  title: string;
  onDismiss: () => void;
}

const modalRoot = document.getElementById('modal') as HTMLElement;

export const Modal = ({ actions, content, title, onDismiss }: Props) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const current = el.current;

    modalRoot.appendChild(current);
    return () => void modalRoot.removeChild(current);
  });

  return createPortal(
    <div
      onClick={onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{ actions }</div>
      </div>
    </div>,
    el.current,
  );
};
