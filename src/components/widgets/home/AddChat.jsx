// libraries
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {LuMessageCircle} from "react-icons/lu";

// components
import {useModal} from "components/hooks/useModal";
import {useDropdownMenu} from "components/hooks/useDropdownMenu";
import AddChatModal from "./AddChatModal";

const AddChatMenu = ({anchorEl ,isOpen , onClose}) => {

    const {t} = useTranslation();

    const {isOpenModal, _handleShowModal, _handleHideModal} = useModal();

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
                    onClick={_handleShowModal}
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

            </Menu>

            <AddChatModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </>
    )
}


const AddChat = () => {

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

            <AddChatMenu
                anchorEl={anchorEl}
                isOpen={isOpenDropdownMenu}
                onClose={_handleHideDropdownMenu}
            />

        </>
    )
}

export default AddChat;

