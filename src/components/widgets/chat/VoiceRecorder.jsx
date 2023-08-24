// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Stack, IconButton, Typography, Button} from "@mui/material";
import {FiSend, FiX} from "react-icons/fi";
import {LuMic} from "react-icons/lu";

const VoiceRecorderModal = ({isOpen , onClose}) => {

    const {t} = useTranslation();

    return isOpen && (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: "absolute",
                bottom: 80,
                left: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 60,
                bgcolor: "background.paper",
                borderRadius: 0,
                boxShadow: 1,
                padding: 2,
            }}
        >

            <Button
                variant="text"
                color="primary"
                startIcon={<FiSend size={20}/>}
                onClick={onClose}
            >
                {t("button.send")}
            </Button>

            <Typography
                variant="body2"
                color="textPrimary"
                fontWeight="bold"
            >
                11:11
            </Typography>

            <Button
                variant="text"
                color="error"
                startIcon={<FiX size={20}/>}
                onClick={onClose}
            >
                {t("button.cancel")}
            </Button>

        </Stack>
    )
}

const VoiceRecorder = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <IconButton
                varinat="text"
                color="ternary"
                onClick={() => setShowModal(true)}
            >
                <LuMic size={20}/>
            </IconButton>

            <VoiceRecorderModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}

export default VoiceRecorder;

