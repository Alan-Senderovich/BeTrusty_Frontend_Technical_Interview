// import Icon from '../../components/Icon';
// import { WithChildren } from '../../models/General';
// import { ModalSize } from '../../theme';
// import { ContainerModal, StyledModal } from './styles';

import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen?: (val: boolean) => void;
  //   size?: ModalSize;
  //   isStatic?: boolean;
  hasIconClose?: boolean;
  onClose?: () => void;
  //   noGap?: boolean;
  //   noMinHeight?: boolean;
  //   widthLarge?: boolean;
  //   smallPadding?: boolean;
}

// export const defaultProps: ModalProps = {
//   children,
//   isOpen: true,
//   size: 'default',
//   hasIconClose: true,
//   isStatic: true,
//   noGap: false,
//   noMinHeight: false,
//   widthLarge: false,
//   smallPadding: false,
// };

const Modal = ({
  children,
  isOpen,
  setIsOpen,
  //   size,
  //   isStatic,
  hasIconClose,
  onClose,
  //   noMinHeight,
  //   widthLarge,
  ...props
}: ModalProps) => {
  const handleClick = () => {
    setIsOpen && setIsOpen(false);
  };
  return (
    <article
    data-testid="modal-container"
      className={`flex w-[full] h-screen bg-black/50 fixed top-0 right-0 left-0 z-50 ${
        isOpen ? "modal__open" : "modal__close"
      }`}
    >
      <div
        className={`w-[600px] min-h-[200px] h-auto flex-wrap justify-center m-auto bg-white relative text-black rounded-lg overflow-y-auto overflow-x-hidden${
          isOpen ? "flex" : "hidden"
        }`}
      >
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
