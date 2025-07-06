'use client';

import { useState } from 'react';
import clsx from 'clsx';

import DeleteKitModal from '../forms/delete/kit';
import DeleteToolModal from '../forms/delete/tool';
import DeleteImplantModal from '../forms/delete/implant';
import DeleteIcon from '@/assets/icons/delete';

type DeleteBtnProps = {
  item: 'kits' | 'tools' | 'implants';
  id: string;
  styles: string;
  label: string;
};

function DeleteBtn({ item, id, styles, label }: DeleteBtnProps) {
  const [isOpen, setIsOpen] = useState(false);

  const props = { id, open: isOpen, close: () => setIsOpen(false) };

  return (
    <>
      {item === 'kits' && <DeleteKitModal {...props} />}
      {item === 'tools' && <DeleteToolModal {...props} />}
      {item === 'implants' && <DeleteImplantModal {...props} />}

      <button
        className={clsx(styles, 'bg-danger text-white')}
        onClick={() => setIsOpen(true)}
      >
        <span>
          <DeleteIcon className="size-5" />
        </span>
        <span>{label}</span>
      </button>
    </>
  );
}

export default DeleteBtn;
