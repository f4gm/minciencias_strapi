import { ReactNode, DialogHTMLAttributes } from "react";

import { BiX } from "react-icons/bi";

import Button from "../Button/Button";

import "./Modal.css";

type ModalProps = {
  children: ReactNode;
} & DialogHTMLAttributes<HTMLDialogElement>;

const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <dialog data-ui="dialog" {...props}>
      <div data-ui="dialog-body">
        <nav data-ui="dialog-header">
          <form method="dialog">
            <Button type="submit">
              <BiX style={{ fontSize: "large" }} />
            </Button>
          </form>
        </nav>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
