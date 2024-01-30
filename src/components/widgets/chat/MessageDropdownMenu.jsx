// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from "@loadable/component";
import { saveAs } from 'file-saver';
import {Menu, MenuItem, Typography} from "@mui/material";
import {FiDownload, FiX} from "react-icons/fi";
import {LuTrash2} from "react-icons/lu";

// stores
import {showModal} from "stores/slices/appSlice";
import {cancelRequest} from "stores/apis/messageApi";
import {setMessages, unSetQueueMessage} from "stores/slices/chatSlice";

// components
const DeleteMessageModal = Loadable(() => import("components/widgets/chat/DeleteMessageModal"));

const MessageDropdownMenuItem = ({label, color, icon, onClick}) => {

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

const MessageDropdownMenu = ({data, contextMenu, isOpen, onClose}) => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const {messages} = useSelector(state => state.chat);

    return (
        <>
            <Menu
                open={isOpen}
                onClose={onClose}
                anchorReference="anchorPosition"
                anchorPosition={isOpen ? {top: contextMenu.mouseY, left: contextMenu.mouseX} : undefined}
                elevation={2}
            >

                {
                    (data?.type === 1 || data?.type === 2 || data?.type === 3 || data?.type === 4) && (
                        <MessageDropdownMenuItem
                            label="menu.download"
                            color="ternary"
                            icon={<FiDownload size={20}/>}
                            onClick={() => {
                                saveAs(data?.content , data?.name);
                                onClose();
                            }}
                        />
                    )
                }

                {
                    data?.type === 6 ? (
                        <MessageDropdownMenuItem
                            label="menu.cancel"
                            color="error"
                            icon={<FiX size={20}/>}
                            onClick={() => {
                                cancelRequest();
                                dispatch(setMessages(messages.filter(message => message._id !== data._id)));
                                dispatch(unSetQueueMessage());
                                onClose();
                            }}
                        />
                    ) : (
                        <MessageDropdownMenuItem
                            label="menu.delete"
                            color="error"
                            icon={<LuTrash2 size={20}/>}
                            onClick={() => {
                                dispatch(showModal({type: `deleteMessage-${data._id}`, data: data}));
                                onClose();
                            }}
                        />
                    )
                }

            </Menu>

            {
                Boolean(modal?.isOpen && modal?.type === `deleteMessage-${data._id}`) && (
                    <DeleteMessageModal/>
                )
            }
        </>
    )
}

export default MessageDropdownMenu;