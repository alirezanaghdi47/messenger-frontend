// libraries
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {Typography, MenuItem, Menu,} from "@mui/material";
import {FiLogOut, FiTrash2, FiUserPlus} from "react-icons/fi";

// providers
import {SocketContext} from "providers/SocketProvider";

// stores
import {hideModal, showModal} from "stores/slices/appSlice";
import {useLeaveGroupChatMutation} from "stores/apis/chatApi";
import {removeChat} from "stores/slices/chatSlice";

// components
const DeleteChatModal = Loadable(() => import("components/widgets/chat/DeleteChatModal"));
const JoinGroupChatModal = Loadable(() => import("components/widgets/chat/JoinGroupChatModal"));

const ToolbarDropdownMenuItem = ({label, color, icon, onClick}) => {

    const {t} = useTranslation();

    return (
        <MenuItem
            sx={{
                display: "flex",
                gap: 1,
                justifyContent: "start",
                alignItems: "center",
                color: theme => theme.palette[color].main
            }}
            onClick={onClick}
        >

            {icon}

            <Typography
                variant="body2"
                color={color}
                fontWeight='bold'
            >
                {t(label)}
            </Typography>

        </MenuItem>
    )
}

const ToolbarDropdownMenu = ({anchorEl, isOpen, onClose}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const {modal} = useSelector(state => state.app);
    const {activeChat} = useSelector(state => state.chat);
    const [leaveGroupChat, leaveGroupChatResponse] = useLeaveGroupChatMutation();
    const {socket} = useContext(SocketContext);

    useEffect(() => {
        if (leaveGroupChatResponse.status === "fulfilled") {
            socket?.current?.emit("leaveGroupChat", {
                userId: _id,
                chat: leaveGroupChatResponse?.data,
                receiverIds: leaveGroupChatResponse?.data.participantIds.filter(user => user._id !== _id).map(item => item._id),
                socketId: socket?.current?.id
            });
            dispatch(removeChat(leaveGroupChatResponse?.data?._id));
            navigate("/chat");
            dispatch(hideModal());
        }
    }, [leaveGroupChatResponse]);

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: language === "en" ? 'right' : 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: language === "en" ? 'right' : 'left',
                }}
                open={isOpen}
                onClose={onClose}
            >

                {
                    Object.hasOwn(activeChat, "groupId") && activeChat?.groupId?.adminId === _id && (
                        <ToolbarDropdownMenuItem
                            label="menu.joinGroupChat"
                            color="ternary"
                            icon={<FiUserPlus size={20}/>}
                            onClick={() => {
                                dispatch(showModal({type: "joinGroupChat" , data: activeChat}));
                                onClose();
                            }}
                        />
                    )
                }

                {
                    Object.hasOwn(activeChat, "groupId") && activeChat?.groupId?.adminId !== _id && (
                        <ToolbarDropdownMenuItem
                            label="menu.leaveGroupChat"
                            color="error"
                            icon={<FiLogOut size={20}/>}
                            onClick={() => {
                                leaveGroupChat(activeChat?._id);
                                onClose();
                            }}
                        />
                    )
                }

                {
                    ((Object.hasOwn(activeChat, "groupId") && activeChat?.groupId?.adminId === _id) || !Object.hasOwn(activeChat, "groupId")) && (
                        <ToolbarDropdownMenuItem
                            label="menu.delete"
                            color="error"
                            icon={<FiTrash2 size={20}/>}
                            onClick={() => {
                                dispatch(showModal({type: "deleteChat", data: activeChat}));
                                onClose();
                            }}
                        />
                    )
                }

            </Menu>

            {
                Boolean(modal?.isOpen && modal?.type === "joinGroupChat") && (
                    <JoinGroupChatModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "deleteChat") && (
                    <DeleteChatModal/>
                )
            }
        </>
    )
}

export default ToolbarDropdownMenu;