import { createPortal } from "react-dom";
import "./Modal.scss";

interface ModalProps {
    children: JSX.Element;
    openModal: boolean;
    setOpenModal: (argg: boolean) => void;
}

const Modal = ({
    children,
    openModal,
    setOpenModal,
}: ModalProps): JSX.Element => {
    return createPortal(
        <div
            className="modal-div"
            style={{
                display: openModal ? "grid" : "none",
            }}
            onClick={() => {
                setOpenModal(false);
            }}
            onKeyDown={(ev) => {
                if (ev.code === "Escape") setOpenModal(false);
            }}
            tabIndex={3}
        >
            {children}
        </div>,
        document.getElementById("modal")!
    );
};

export default Modal;
