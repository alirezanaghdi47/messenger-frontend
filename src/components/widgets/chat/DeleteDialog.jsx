// libraries
import {useTranslation} from "react-i18next";
import {
    Stack,
    Modal,
    Container,
    useMediaQuery, IconButton, Button, Typography, Box
} from "@mui/material";
import {useSelector} from "react-redux";
import {FiMicOff, FiPhoneOff, FiRefreshCw, FiVideoOff} from "react-icons/fi";
import {LuTrash2} from "react-icons/lu";

const ModalContent = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%",
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 1,
                }}
            >

                <LuTrash2 size={20}/>

                <Typography
                    variant="body1"
                    color="textPrimary"
                    fontWeight="bold"
                >
                    {t("typography.deleteTitle")}
                </Typography>

            </Box>

            <Typography
                variant="body2"
                color="textPrimary"
            >
                {t("typography.deleteContent")}
            </Typography>

        </Stack>
    )
}

const ModalFooter = ({onClose}) => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Button
                variant="text"
                color="ternary"
                onClick={onClose}
            >
                {t("button.cancel")}
            </Button>

            <Button
                variant="contained"
                color="error"
                onClick={onClose}
            >
                {t("button.delete")}
            </Button>

        </Stack>
    )
}

const DeleteDialog = ({isOpen, onClose}) => {

    const isTablet = useMediaQuery('(max-width: 576px)');

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    width: isTablet ? "100%" : 250,
                    height: isTablet ? "100%" : "max-content",
                    bgcolor: "background.paper",
                    borderRadius: isTablet ? 0 : 1,
                    padding: 2,
                }}
            >

                <ModalContent/>

                <ModalFooter onClose={onClose}/>

            </Stack>

        </Modal>
    )
}

export default DeleteDialog;

