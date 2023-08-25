// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Menu, MenuItem, Typography} from "@mui/material";
import {LuMessageCircle} from "react-icons/lu";

// components
import AddChatModal from "./AddChatModal";

const AddChatDropdown = ({anchorEl ,isOpen , onClose}) => {

    const {t} = useTranslation();

    const [showAddChatModal , setShowAddChatModal] = useState(false);

    const _handleShowAddChatModal = () => {
        setShowAddChatModal(true);
        onClose();
    }
    const _handleHideAddChatModal = () => {
        setShowAddChatModal(false);
        onClose();
    }

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

            </Menu>

            <AddChatModal
                isOpen={showAddChatModal}
                onClose={_handleHideAddChatModal}
            />

        </>
    )
}

export default AddChatDropdown;