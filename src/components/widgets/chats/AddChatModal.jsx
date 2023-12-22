// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {IconButton, Modal, Stack, Typography, useMediaQuery} from "@mui/material";
import {FiX} from "react-icons/fi";

// components
import SearchBar from "components/widgets/chats/Searchbar";
import Users from "components/widgets/chats/Users";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";

// stores
import {hideModal} from "stores/slices/appSlice";
import {useGetAllUserQuery} from "stores/apis/chatApi";

const ModalHeader = () => {

    const dispatch = useDispatch();
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
                onClick={() => dispatch(hideModal())}
            >
                <FiX size={20}/>
            </IconButton>

        </Stack>
    )
}

const ModalContent = () => {

    const {data, error, isLoading} = useGetAllUserQuery();

    return (
        <Stack
            direction="column"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <SearchBar/>

            {
                !isLoading && !error && data.length > 0 ? (
                    <Users users={data}/>
                ) : (
                    <EmptyPlaceholder/>
                )
            }

        </Stack>
    )
}

const AddChatModal = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === "createChat")}
            onClose={() => dispatch(hideModal())}
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

            </Stack>

        </Modal>
    )
}

export default AddChatModal;