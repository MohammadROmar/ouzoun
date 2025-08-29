'use client';

import {
  useState,
  useEffect,
  type PropsWithChildren,
  type ComponentPropsWithRef,
} from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

type ModalProps = ComponentPropsWithRef<'dialog'> & {
  title: string;
  description?: string;
  titleStyles?: string;
} & PropsWithChildren;

function Modal({
  title,
  description,
  titleStyles,
  children,
  ...props
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={props.ref}
      aria-modal
      aria-live="polite"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="bg-bg-primary border-gray/50 animate-fade-in card-shadow fixed top-1/2 w-fit -translate-1/2 overflow-hidden rounded-xl border backdrop:bg-black/50 max-sm:w-full sm:min-w-md ltr:left-1/2 rtl:right-1/2 rtl:translate-x-1/2"
      {...props}
    >
      <div className="relative p-4">
        <h4
          id="modal-title"
          className={clsx('ltr:font-ubuntu text-2xl', titleStyles)}
        >
          {title}
        </h4>
        {description && (
          <p
            id="modal-description"
            className="my-4 text-sm whitespace-pre-wrap"
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </dialog>,
    document.getElementById('modals')!,
  );
}

export default Modal;
