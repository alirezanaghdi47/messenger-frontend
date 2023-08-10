// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {LuTarget} from "react-icons/lu";

const Actionbar = () => {

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
                    zIndex: 150,
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
                    onClick={() => console.log("add contact")}
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <LuTarget size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.createStatus")}
                    </Typography>

                </MenuItem>

            </Menu>

        </>
    )
}

export default Actionbar;

