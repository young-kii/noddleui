import { confirmModalProps, modalProps } from "../../noddle-components/modal/types";
import React from "react";
declare const Modal: {
    (props: modalProps): React.ReactPortal;
    confirm(props: confirmModalProps): void;
};
export default Modal;
