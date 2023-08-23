// libraries
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Modal, Stack, IconButton, Typography, Button} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";

// components
import SearchBar from "./Searchbar";
import Users from "./Users";

const ModalHeader = () => {

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

            <Users/>

        </Stack>
    )
}

const ModalFooter = () => {

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
            >
                {t("button.cancel")}
            </Button>

            <Button
                color="primary"
                variant="contained"
                startIcon={<FiCheck size={20}/>}
            >
                {t("button.submit")}
            </Button>

        </Stack>
    )
}

const CreateChatModal = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={true}
            onClose={() => {return null}}
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

                <ModalHeader/>

                <ModalContent/>

                <ModalFooter/>

            </Stack>

        </Modal>
    )
}

export default CreateChatModal;

