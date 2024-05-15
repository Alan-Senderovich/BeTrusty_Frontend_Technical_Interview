import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen?: (val: boolean) => void;
  hasIconClose?: boolean;
  onClose?: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <article
      data-testid="modal-container"
      className={`flex w-[full] h-screen bg-black/50 fixed top-0 right-0 left-0 z-50 ${
        isOpen ? "modal__open" : "modal__close"
      }`}
    >
      <div className={`modal__wrapper ${isOpen ? "flex" : "hidden"}`}>
        <div className="break-words py-12 px-6">{children}</div>
        <div
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-2"
        >
          <IoIosCloseCircle size={30} />
        </div>
      </div>
    </article>
  );
};

export default Modal;
