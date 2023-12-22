// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {toast} from "react-hot-toast";
import {IconButton, Menu, MenuItem, Typography , useMediaQuery} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {LuMessageCircle, LuUsers} from "react-icons/lu";

// hooks
import {useDropdownMenu} from "hooks/useDropdownMenu";

// utils
import {showModal} from "stores/slices/appSlice";

const AddChatModal = Loadable(() => import("components/widgets/chats/AddChatModal"));

const ActionButtonMenu = ({anchorEl, isOpen, onClose}) => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const {t} = useTranslation();

    return (
        <>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={isOpen}
                onClose={onClose}
            >

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                    onClick={() => {
                        onClose();
                        dispatch(showModal({type: 'createChat'}));
                    }}
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

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                    onClick={() => {
                        onClose();
                        toast.success(t("typography.comingSoon"));
                    }}
                >

                    <LuUsers size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.createGroup")}
                    </Typography>

                </MenuItem>

            </Menu>

            {
                Boolean(modal?.isOpen && modal?.type === "createChat") && (
                    <AddChatModal/>
                )
            }

        </>
    )
}


const ActionButton = () => {

    const isDesktop = useMediaQuery('(max-width: 992px)');
    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();

    return (
        <>

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={_handleShowDropdownMenu}
                sx={{
                    position: 'absolute',
                    zIndex: 25,
                    left: isDesktop ? "calc(100% - 60px)" : "calc(360px - 60px)",
                    bottom: 16
                }}
            >
                <FiPlus size={20}/>
            </IconButton>

            <ActionButtonMenu
                anchorEl={anchorEl}
                isOpen={isOpenDropdownMenu}
                onClose={_handleHideDropdownMenu}
            />

        </>
    )
}

export default ActionButton;

