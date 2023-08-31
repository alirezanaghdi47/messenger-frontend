// libraries
import {IconButton} from "@mui/material";
import {LuMic} from "react-icons/lu";

// components
import {useModal} from "components/hooks/useModal";
import VoiceRecorderModal from "components/widgets/chat/VoiceRecorderModal";

const VoiceRecorder = () => {

    const {isOpenModal, _handleShowModal, _handleHideModal} = useModal();

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
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </>
    )
}

export default VoiceRecorder;

