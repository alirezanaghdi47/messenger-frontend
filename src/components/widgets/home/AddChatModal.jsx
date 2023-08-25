// libraries
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Button, IconButton, Modal, Stack, Typography} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";

// components
import SearchBar from "./Searchbar";
import Contacts from "./Contacts";

const ModalHeader = ({onClose}) => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Typography
                variant="subtitle1"
                color="textPrimary"
                fontWeight='bold'
                noWrap
            >
                {t("typography.createChat")}
            </Typography>

            <IconButton
                variant="text"
                color="ternary"
                onClick={onClose}
            >
                <FiX size={20}/>
            </IconButton>

        </Stack>
    )
}

const ModalContent = () => {

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <SearchBar/>

            <Contacts/>

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
                color="ternary"
                variant="text"
                startIcon={<FiX size={20}/>}
                onClick={onClose}
            >
                {t("button.cancel")}
            </Button>

            <Button
                color="primary"
                variant="contained"
                startIcon={<FiCheck size={20}/>}
                onClick={onClose}
            >
                {t("button.submit")}
            </Button>

        </Stack>
    )
}

const AddChatModal = ({isOpen , onClose}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

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
                    width: isTablet ? "100%" : 480,
                    height: isTablet ? "100%" : "max-content",
                    bgcolor: "background.paper",
                    borderRadius: isTablet ? 0 : 1,
                    boxShadow: 1,
                    padding: 2,
                }}
            >

                <ModalHeader onClose={onClose}/>

                <ModalContent/>

                <ModalFooter onClose={onClose}/>

            </Stack>

        </Modal>
    )
}

export default AddChatModal;