import { createPortal } from "react-dom";

const Modal = () => {
    return createPortal(<div></div>, document.getElementById("modal")!);
};

export default Modal;
