import { useCallback, useRef, PropsWithChildren } from 'react';
import './Dialog.css';

const INPUT_NAME = 'dialogInput';

interface DialogProps<T> {
  cancelText?: string | boolean;
  confirmText?: string | boolean;
  onClose?: () => void | Promise<void>;
  onSubmit: (value: T) => void | Promise<void>;
  open?: boolean;
}

export default function Dialog<T = string | number | boolean>({
  children,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onClose,
  onSubmit,
  open,
}: PropsWithChildren<DialogProps<T>>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onDialogSubmit = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (!dialogRef.current) {
        return;
      }

      const formInput = dialogRef.current.querySelector(
        `[name=${INPUT_NAME}]`
      ) as HTMLInputElement; // Get the first input element in the dialog

      console.log('Dialog input type is', formInput.type);
      switch (formInput.type) {
        case 'radio':
          // It's radio elements
          const value = document.getElementsByName(INPUT_NAME);
          for (const element of value) {
            const radio = element as HTMLInputElement;
            if (radio.checked) {
              onSubmit(radio.value as T);
            }
          }
          break;
        case 'checkbox':
          onSubmit(formInput.checked as T);
          break;
        default:
          onSubmit(formInput.value as T);
          break;
      }
      //await new Promise((res) => setTimeout(res, 250)); // Loading animation?
      await onClose?.();
    },
    []
  );

  if (!open) return null;

  return (
    <dialog ref={dialogRef} open={open} className="Dialog__container">
      <div className="Dialog">
        <form method="dialog">{children}</form>
        <div className="Dialog__buttonContainer">
          {confirmText && (
            <button type="button" onClick={onDialogSubmit}>
              {confirmText}
            </button>
          )}
          {cancelText && (
            <button type="button" onClick={onClose}>
              {cancelText}
            </button>
          )}
        </div>
      </div>
    </dialog>
  );
}
