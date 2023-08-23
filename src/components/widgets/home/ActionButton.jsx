// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {LuMessageCircle} from "react-icons/lu";

// components
import CreateChatModal from "./CreateChatModal";

const ActionButton = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();
    const isDesktop = useMediaQuery('(max-width: 992px)');

    return (
        <>

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{
                    position: 'absolute',
                    zIndex: 25,
                    left: isDesktop ? "calc(100% - 60px)" : "calc(360px - 60px)",
                    bottom: 16
                }}
            >
                <FiPlus size={20}/>
            </IconButton>

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
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                    onClick={() => console.log("add contact modal")}
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

            {/*<CreateChatModal/>*/}

        </>
    )
}

export default ActionButton;

