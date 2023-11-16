// libraries
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {toast} from "react-hot-toast";
import {IconButton, Menu, MenuItem, Typography , useMediaQuery} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {LuMessageCircle, LuUsers} from "react-icons/lu";

// hooks
import {useModal} from "hooks/useModal";
import {useDropdownMenu} from "hooks/useDropdownMenu";

// components
const AddChatModal = Loadable(() => import("components/widgets/chats/AddChatModal"));

const ActionButtonMenu = ({anchorEl, isOpen, onClose}) => {

    const {t} = useTranslation();

    const {
        isOpenModal: addChatIsOpenModal,
        _handleShowModal: _handleShowAddChatModal,
        _handleHideModal: _handleHideAddChatModal
    } = useModal();

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
                    onClick={_handleShowAddChatModal}
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
                    onClick={() => toast.success(t("typography.comingSoon"))}
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

            <AddChatModal
                isOpen={addChatIsOpenModal}
                onClose={_handleHideAddChatModal}
            />

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

