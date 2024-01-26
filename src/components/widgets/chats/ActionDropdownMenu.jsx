// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {Menu, MenuItem, Typography} from "@mui/material";
import {LuMessageCircle, LuUsers} from "react-icons/lu";

// utils
import {showModal} from "stores/slices/appSlice";

// components
const AddUserChatModal = Loadable(() => import("components/widgets/chats/AddUserChatModal"));
const AddGroupChatModal = Loadable(() => import("components/widgets/chats/AddGroupChatModal"));

const ActionDropdownMenuItem = ({label , icon , onClick}) => {

    const {t} = useTranslation();

    return (
        <MenuItem
            sx={{
                display: "flex",
                gap: 1,
                justifyContent: "start",
                alignItems: "center",
            }}
            onClick={onClick}
        >

            {icon}

            <Typography
                variant="body2"
                color="textSecondary"
                fontWeight='bold'
            >
                {t(label)}
            </Typography>

        </MenuItem>
    )
}

const ActionDropdownMenu = ({anchorEl, isOpen, onClose}) => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const {language} = useSelector(state => state.setting.appearance);

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: language === "en" ? 'right' : 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: language === "en" ? 'right' : 'left',
                }}
                open={isOpen}
                onClose={onClose}
            >

                <ActionDropdownMenuItem
                    label="menu.addUserChat"
                    icon={<LuMessageCircle size={20}/>}
                    onClick={() => {
                        dispatch(showModal({type: 'addUserChat'}));
                        onClose();
                    }}
                />

                <ActionDropdownMenuItem
                    label="menu.addGroupChat"
                    icon={<LuUsers size={20}/>}
                    onClick={() => {
                        dispatch(showModal({type: 'addGroupChat'}));
                        onClose();
                    }}
                />

            </Menu>

            {
                Boolean(modal?.isOpen && modal?.type === "addUserChat") && (
                    <AddUserChatModal/>
                )
            }

            {
                Boolean(modal?.isOpen && modal?.type === "addGroupChat") && (
                    <AddGroupChatModal/>
                )
            }
        </>
    )
}

export default ActionDropdownMenu;

