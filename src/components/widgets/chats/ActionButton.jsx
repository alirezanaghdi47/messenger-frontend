// libraries
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {LuMessageCircle, LuUsers} from "react-icons/lu";

// components
import {useModal} from "components/hooks/useModal";
import {useDropdownMenu} from "components/hooks/useDropdownMenu";
const AddChatModal = Loadable(() => import("components/widgets/chats/AddChatModal"));
const AddGroupModal = Loadable(() => import("components/widgets/chats/AddGroupModal"));

const ActionButtonMenu = ({anchorEl, isOpen, onClose}) => {

    const {t} = useTranslation();

    const {
        isOpenModal: addChatIsOpenModal,
        _handleShowModal: _handleShowAddChatModal,
        _handleHideModal: _handleHideAddChatModal
    } = useModal();

    const {
        isOpenModal: addGroupIsOpenModal,
        _handleShowModal: _handleShowAddGroupModal,
        _handleHideModal: _handleHideAddGroupModal
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
                    onClick={_handleShowAddGroupModal}
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

            <AddGroupModal
                isOpen={addGroupIsOpenModal}
                onClose={_handleHideAddGroupModal}
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

