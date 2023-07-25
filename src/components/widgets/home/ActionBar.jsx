// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiMessageCircle, FiPlus, FiUsers} from "react-icons/fi";

const ActionBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {darkMode} = useSelector(state => state.user.setting);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <>

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{
                    position: "fixed",
                    zIndex: 200,
                    left: isTablet ? "calc(100% - 64px)" : "calc(300px - 64px)",
                    bottom: 24
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
                    onClick={() => console.log("create chat")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiMessageCircle
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.createChat")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    onClick={() => console.log("create group")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiUsers
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.createGroup")}
                    </Typography>

                </MenuItem>

            </Menu>

        </>
    )
}

export default ActionBar;

