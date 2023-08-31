// libraries
import {useState} from "react";

export const useModal = () => {

    const [showModal, setShowModal] = useState(false);

    const isOpenModal = showModal;
    const _handleShowModal = () => setShowModal(true);

    const _handleHideModal = () => setShowModal(false);

    return {isOpenModal, _handleShowModal, _handleHideModal};

}

