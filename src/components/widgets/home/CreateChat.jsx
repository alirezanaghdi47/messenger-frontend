// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Modal, Stack, IconButton, Typography, Button, MenuItem} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";
import {LuMessageCircle} from "react-icons/lu";

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

const CreateChatModal = ({isOpen , onClose}) => {

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

const CreateChat = () => {

    const {t} = useTranslation();

    const [showModal , setShowModal] = useState(false);

    return (
        <>

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                }}
                onClick={() => setShowModal(true)}
            >

                <LuMessageCircle size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.createChat")}
                </Typography>

            </MenuItem>

            <CreateChatModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}

export default CreateChat;
