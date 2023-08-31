// libraries
import {useTranslation} from "react-i18next";
import {Button, Stack, Typography} from "@mui/material";
import {FiSend, FiX} from "react-icons/fi";

const VoiceRecorderModal = ({isOpen , onClose}) => {

    const {t} = useTranslation();

    return isOpen && (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                borderRadius: 0,
                padding: 2,
            }}
        >

            <Button
                variant="text"
                color="error"
                startIcon={<FiX size={20}/>}
                onClick={onClose}
            >
                {t("button.cancel")}
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
                color="primary"
                startIcon={<FiSend size={20}/>}
                onClick={onClose}
            >
                {t("button.send")}
            </Button>

        </Stack>
    )
}

export default VoiceRecorderModal;