import { useRef, FormEventHandler, PropsWithChildren } from 'react';
import './Dialog.css';

interface DialogProps {
  open?: boolean;
  onClose: () => void;
  onSubmit?: FormEventHandler<HTMLDialogElement>;
}

export default function Dialog({
  children,
  open,
  onClose,
  onSubmit,
}: PropsWithChildren<DialogProps>) {
  const ref = useRef<HTMLDialogElement>(null);
  //console.log({ open });

  if (!open) return null;

  return (
    <dialog
      ref={ref}
      open={open}
      onClose={onClose}
      onCancel={onClose}
      onSubmit={onSubmit}
      className="Dialog__container"
    >
      <div className="Dialog">
        <form method="dialog">{children}</form>
      </div>
    </dialog>
  );
}
