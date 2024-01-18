// libraries
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {toast} from "react-hot-toast";
import {
    IconButton,
    Stack,
    Typography,
    MenuItem,
    Menu,
    useMediaQuery
} from "@mui/material";
import {FiLogOut, FiMoreVertical, FiPhone, FiTrash2, FiUserPlus, FiVideo} from "react-icons/fi";

// components
import {useDropdownMenu} from "hooks/useDropdownMenu";

// providers
import {SocketContext} from "providers/Socket";

// stores
import {hideModal, showModal} from "stores/slices/appSlice";
import {useLeaveGroupChatMutation} from "stores/apis/chatApi";

const DesktopToolbar = ({
                            anchorEl,
                            isOpenDropdownMenu,
                            onCloseDropdownMenu,
                            onOpenDropdownMenu,
                        }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {activeChat} = useSelector(state => state.chat);
    const [leaveGroupChat , leaveGroupChatResponse] = useLeaveGroupChatMutation();
    const {t} = useTranslation();
    const {socket} = useContext(SocketContext);

    useEffect(() => {

        if (leaveGroupChatResponse.status === "fulfilled") {
            socket?.current?.emit("leaveGroup", {
                userId: _id,
                chat: leaveGroupChatResponse?.data,
                receiverIds: leaveGroupChatResponse?.data.participantIds.filter(user => user._id !== _id).map(item => item._id),
                socketId: socket?.current?.id
            });
            navigate("/chat");
            dispatch(hideModal());
        }

    }, [leaveGroupChatResponse]);

    return (
        <Stack
            component="ul"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: 'center',
            }}
        >

            {
                !activeChat?.groupId && (
                    <>
                        <IconButton
                            component="li"
                            variant="text"
                            color="ternary"
                            onClick={() => {
                                onCloseDropdownMenu();
                                toast.success(t("typography.comingSoon"));
                            }}
                        >
                            <FiPhone size={20}/>
                        </IconButton>

                        <IconButton
                            component="li"
                            variant="text"
                            color="ternary"
                            onClick={() => {
                                onCloseDropdownMenu();
                                toast.success(t("typography.comingSoon"));
                            }}
                        >
                            <FiVideo size={20}/>
                        </IconButton>
                    </>
                )
            }

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={onOpenDropdownMenu}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={isOpenDropdownMenu}
                onClose={onCloseDropdownMenu}
            >

                {
                    Object.hasOwn(activeChat, "groupId") && activeChat?.groupId?.adminId === _id ? (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "ternary.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                dispatch(showModal({type: "joinGroup", data: []}));
                            }}
                        >

                            <FiUserPlus size={20}/>

                            <Typography
                                variant="body2"
                                color="ternary"
                                fontWeight='bold'
                            >
                                {t("menu.join")}
                            </Typography>

                        </MenuItem>
                    ) : (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "error.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                leaveGroupChat(activeChat?._id);
                            }}
                        >

                            <FiLogOut size={20}/>

                            <Typography
                                variant="body2"
                                color="error"
                                fontWeight='bold'
                            >
                                {t("menu.leave")}
                            </Typography>

                        </MenuItem>
                    )
                }

                {
                    ((Object.hasOwn(activeChat , "groupId") && activeChat?.groupId?.adminId === _id) || !Object.hasOwn(activeChat , "groupId")) && (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "error.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                dispatch(showModal({type: "deleteContact", data: activeChat}));
                            }}
                        >

                            <FiTrash2 size={20}/>

                            <Typography
                                variant="body2"
                                color="error"
                                fontWeight='bold'
                            >
                                {t("menu.delete")}
                            </Typography>

                        </MenuItem>
                    )
                }

            </Menu>

        </Stack>
    )
}

const MobileToolbar = ({
                           anchorEl,
                           isOpenDropdownMenu,
                           onCloseDropdownMenu,
                           onOpenDropdownMenu,
                       }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {activeChat} = useSelector(state => state.chat);
    const [leaveGroupChat , leaveGroupChatResponse] = useLeaveGroupChatMutation();
    const {t} = useTranslation();
    const {socket} = useContext(SocketContext);

    useEffect(() => {

        if (leaveGroupChatResponse.status === "fulfilled") {
            socket?.current?.emit("leaveGroup", {
                userId: _id,
                chat: leaveGroupChatResponse?.data,
                receiverIds: leaveGroupChatResponse?.data.participantIds.filter(user => user._id !== _id).map(item => item._id),
                socketId: socket?.current?.id
            });
            navigate("/chat");
            dispatch(hideModal());
        }

    }, [leaveGroupChatResponse]);

    return (
        <Stack
            component="ul"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: 'center',
            }}
        >

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={onOpenDropdownMenu}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={isOpenDropdownMenu}
                onClose={onCloseDropdownMenu}
            >

                {
                    !Object.hasOwn(activeChat , "groupId") && (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "ternary.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                toast.success(t("typography.comingSoon"));
                            }}
                        >

                            <FiPhone size={20}/>

                            <Typography
                                variant="body2"
                                color="textSecondary"
                                fontWeight='bold'
                            >
                                {t("menu.voiceCall")}
                            </Typography>

                        </MenuItem>

                    )
                }

                {
                    !Object.hasOwn(activeChat , "groupId") && (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "ternary.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                toast.success(t("typography.comingSoon"));
                            }}
                        >

                            <FiVideo size={20}/>

                            <Typography
                                variant="body2"
                                color="textSecondary"
                                fontWeight='bold'
                            >
                                {t("menu.videoCall")}
                            </Typography>

                        </MenuItem>
                    )
                }

                {
                    Object.hasOwn(activeChat, "groupId") && activeChat?.groupId?.adminId === _id ? (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "ternary.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                dispatch(showModal({type: "joinGroup", data: []}));
                            }}
                        >

                            <FiUserPlus size={20}/>

                            <Typography
                                variant="body2"
                                color="ternary"
                                fontWeight='bold'
                            >
                                {t("menu.join")}
                            </Typography>

                        </MenuItem>
                    ) : (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "error.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                leaveGroupChat(activeChat?._id);
                            }}
                        >

                            <FiLogOut size={20}/>

                            <Typography
                                variant="body2"
                                color="error"
                                fontWeight='bold'
                            >
                                {t("menu.leave")}
                            </Typography>

                        </MenuItem>
                    )
                }

                {
                    ((Object.hasOwn(activeChat , "groupId") && activeChat?.groupId?.adminId === _id) || !Object.hasOwn(activeChat , "groupId")) && (
                        <MenuItem
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                                color: "error.main"
                            }}
                            onClick={() => {
                                onCloseDropdownMenu();
                                dispatch(showModal({type: "deleteContact", data: activeChat}));
                            }}
                        >

                            <FiTrash2 size={20}/>

                            <Typography
                                variant="body2"
                                color="error"
                                fontWeight='bold'
                            >
                                {t("menu.delete")}
                            </Typography>

                        </MenuItem>
                    )
                }

            </Menu>

        </Stack>
    )
}

const Toolbar = () => {

    const isTablet = useMediaQuery('(min-width: 768px)');
    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();

    return (
        <>

            {
                isTablet ?
                    <DesktopToolbar
                        anchorEl={anchorEl}
                        isOpenDropdownMenu={isOpenDropdownMenu}
                        onOpenDropdownMenu={_handleShowDropdownMenu}
                        onCloseDropdownMenu={_handleHideDropdownMenu}
                    /> :
                    <MobileToolbar
                        anchorEl={anchorEl}
                        isOpenDropdownMenu={isOpenDropdownMenu}
                        onOpenDropdownMenu={_handleShowDropdownMenu}
                        onCloseDropdownMenu={_handleHideDropdownMenu}
                    />
            }

        </>
    )
}

export default Toolbar;