// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiPlus} from "react-icons/fi";
import {LuDisc} from "react-icons/lu";

const Actionbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    return (
        <>

            <IconButton
                variant="contained"
                color="primary"
                size="large"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{
                    position: "fixed",
                    zIndex: 150,
                    left: isTablet ? "calc(100% - 60px)" : "calc(400px - 60px)",
                    bottom: isMobile ? 86 : 16
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

                    <LuDisc size={20}/>

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

