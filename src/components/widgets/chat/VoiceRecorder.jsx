// libraries
import {useState} from "react";
import {IconButton} from "@mui/material";
import {LuMic} from "react-icons/lu";

// components
import VoiceRecorderModal from "./VoiceRecorderModal";

const VoiceRecorder = () => {

    const [showModal, setShowModal] = useState(false);

    const _handleShowModal = () => setShowModal(true);
    const _handleHideModal = () => setShowModal(false);

    return (
        <>

            <IconButton
                varinat="text"
                color="ternary"
                onClick={_handleShowModal}
            >
                <LuMic size={20}/>
            </IconButton>

            <VoiceRecorderModal
                isOpen={showModal}
                onClose={_handleHideModal}
            />

        </>
    )
}

export default VoiceRecorder;

