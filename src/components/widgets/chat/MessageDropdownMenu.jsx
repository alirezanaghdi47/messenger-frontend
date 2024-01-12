// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import { saveAs } from 'file-saver';
import {Menu, MenuItem, Typography} from "@mui/material";
import {FiDownload, FiX} from "react-icons/fi";
import {LuTrash2} from "react-icons/lu";

// stores
import {showModal, showPopup} from "stores/slices/appSlice";
import {cancelRequest} from "stores/apis/messageApi";
import {setMessages, unSetQueueMessage} from "stores/slices/chatSlice";

const MessageDropdownMenu = ({data, contextMenu, isOpen, onClose}) => {

    const dispatch = useDispatch();
    const {messages} = useSelector(state => state.chat);
    const {t} = useTranslation();

    return (
        <Menu
            open={isOpen}
            onClose={onClose}
            anchorReference="anchorPosition"
            anchorPosition={
                isOpen
                    ? {top: contextMenu.mouseY, left: contextMenu.mouseX}
                    : undefined
            }
        >

            {
                (data?.type !== 0 && data.type !== 5 && data.type !== 6) && (
                    <MenuItem
                        sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "start",
                            alignItems: "center",
                            color: 'ternary.main'
                        }}
                        onClick={() => {
                            onClose();
                            saveAs(data?.content , data?.name);
                        }}
                    >

                        <FiDownload size={20}/>

                        <Typography
                            variant="body2"
                            color="ternary"
                            fontWeight='bold'
                        >
                            {t("menu.download")}
                        </Typography>

                    </MenuItem>
                )
            }

            {
                (data?.type === 6) && (
                    <MenuItem
                        sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "start",
                            alignItems: "center",
                            color: "error.main"
                        }}
                        onClick={() => {
                            cancelRequest();
                            dispatch(setMessages(messages.filter(message => message._id !== data._id)));
                            dispatch(unSetQueueMessage());
                            onClose();
                        }}
                    >

                        <FiX size={20}/>

                        <Typography
                            variant="body2"
                            color="error"
                            fontWeight='bold'
                        >
                            {t("menu.cancel")}
                        </Typography>

                    </MenuItem>
                )
            }

            {
                (data?.type !== 6) && (
                    <MenuItem
                        sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "start",
                            alignItems: "center",
                            color: "error.main"
                        }}
                        onClick={() => {
                            onClose();
                            dispatch(showModal({type: "deleteChat", data: data}));
                        }}
                    >

                        <LuTrash2 size={20}/>

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
    )
}

export default MessageDropdownMenu;