// libraries
import {useTranslation} from "react-i18next";
import {
    Stack,
    Modal,
    Button,
    Typography,
    Box
} from "@mui/material";
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

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            onContextMenuCapture={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
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
                    justifyContent: "center",
                    alignItems: "center",
                    width: 250,
                    height: "max-content",
                    bgcolor: "background.paper",
                    borderRadius: 1,
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

