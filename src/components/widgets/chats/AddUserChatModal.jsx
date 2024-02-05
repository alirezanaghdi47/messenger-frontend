// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {IconButton, Modal, Stack, Typography, useMediaQuery} from "@mui/material";
import {FiX} from "react-icons/fi";

// components
import UsersSearchbar from "components/widgets/chats/UsersSearchbar";
import Users from "components/widgets/chats/Users";
import NoData from "components/partials/NoData";

// stores
import {hideModal} from "stores/slices/appSlice";
import {useGetAllUserQuery} from "stores/apis/userApi";

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

    const {modal} = useSelector(state => state.app);
    const {users , filteredUsers} = useSelector(state => state.chat);
    const {refetch: allUserRefetch} = useGetAllUserQuery();

    useEffect(() => {
        allUserRefetch();
    }, [Boolean(modal.isOpen && modal.type === "addUserChat")]);

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
                height: "100%"
            }}
        >

            <UsersSearchbar/>

            {
                (filteredUsers.length > 0 || users.length > 0) ? (
                    <Users/>
                ) : (
                    <NoData/>
                )
            }

        </Stack>
    )
}

const AddUserChatModal = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === "addUserChat")}
            onClose={() => dispatch(hideModal())}
            disableAutoFocus
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
                    height: isTablet ? "100%" : 480,
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

export default AddUserChatModal;