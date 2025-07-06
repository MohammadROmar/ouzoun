'use client';

import { RefObject, useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

type ModalProps = {
  title: string;
  description: string;
  ref: RefObject<HTMLDialogElement | null>;
  titleStyles?: string;
  children: ReactNode;
};

function Modal({ title, description, ref, titleStyles, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={ref}
      aria-modal
      aria-live="polite"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="bg-bg-primary card-shadow fixed top-1/2 w-fit -translate-1/2 space-y-4 rounded-xl p-4 backdrop:bg-black/50 max-sm:w-full ltr:left-1/2 rtl:right-1/2 rtl:translate-x-1/2"
    >
      <h4 id="modal-title" className={clsx('text-xl', titleStyles)}>
        {title}
      </h4>
      <p id="modal-description" className="whitespace-pre-wrap">
        {description}
      </p>
      {children}
    </dialog>,
    document.getElementById('modals')!,
  );
}

export default Modal;
