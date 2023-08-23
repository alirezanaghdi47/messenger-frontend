// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Modal, Stack, IconButton, Typography, useTheme, alpha, Container, Card, Button} from "@mui/material";
import {FiCheck, FiPlay, FiSend, FiX} from "react-icons/fi";
import {LuPlay} from "react-icons/lu";

const VoiceModal = () => {

    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                position: "absolute",
                bottom: 70,
                left: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                borderRadius: 0,
                boxShadow: 3,
                padding: 2,
            }}
        >

            <Button
                variant="text"
                color="primary"
                startIcon={<FiSend size={20}/>}
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
            >
                {t("button.cancel")}
            </Button>

        </Stack>
    )
}

export default VoiceModal;

