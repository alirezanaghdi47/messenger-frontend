// libraries
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Button, IconButton, Modal, Stack, Typography, useMediaQuery} from "@mui/material";
import {FiCheck, FiX} from "react-icons/fi";

// components
import UsersSearchbar from "components/widgets/chats/UsersSearchbar";
import Peoples from "components/widgets/chats/Peoples";
import EmptyPlaceholder from "components/partials/EmptyPlaceholder";

// providers
import {SocketContext} from "providers/Socket";

// stores
import {hideModal} from "stores/slices/appSlice";
import {setUsers} from "stores/slices/chatSlice";
import {useGetAllRemainingUserQuery, useJoinGroupChatMutation} from "stores/apis/chatApi";

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
                {t("typography.joinGroup")}
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

    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {modal} = useSelector(state => state.app);
    const {users, filteredUsers , activeChat} = useSelector(state => state.chat);
    const {refetch: allRemainingUserRefetch} = useGetAllRemainingUserQuery(activeChat?.participantIds.map(user => user._id));
    const [joinGroupChat , joinGroupChatResponse] = useJoinGroupChatMutation();
    const {t} = useTranslation();
    const {socket} = useContext(SocketContext);

    useEffect(() => {

        if (joinGroupChatResponse.isSuccess) {
            dispatch(hideModal());
        }

        if (joinGroupChatResponse.status === "fulfilled") {
            socket?.current?.emit("joinGroup", {
                userId: _id,
                chat: activeChat,
                receiverIds: activeChat?.participantIds.map(user => user._id),
                socketId: socket?.current?.id
            });
        }

    }, [joinGroupChatResponse]);

    useEffect(() => {
        allRemainingUserRefetch();
    } , [Boolean(modal.isOpen && modal.type === "joinGroup")])

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
                    <Peoples/>
                ) : (
                    <EmptyPlaceholder/>
                )
            }

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "auto"
                }}
            >

                <Button
                    variant="text"
                    color="ternary"
                    startIcon={<FiX size={20}/>}
                    onClick={() => dispatch(hideModal())}
                >
                    {t("button.cancel")}
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<FiCheck size={20}/>}
                    onClick={() => joinGroupChat({chatId: activeChat?._id, receiverIds: modal.data})}
                >
                    {t("button.submit")}
                </Button>

            </Stack>

        </Stack>
    )
}

const JoinGroupModal = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const {_id} = useSelector(state => state.setting.profile);
    const {socket} = useContext(SocketContext);
    const isTablet = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        socket?.current?.emit("getAllUser", {userId: _id});
        socket?.current?.on("getAllUserResponse", data => {
            dispatch(setUsers(data));
        });
    }, []);

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === "joinGroup")}
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

export default JoinGroupModal;