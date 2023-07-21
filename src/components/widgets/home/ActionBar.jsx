// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {FiMessageCircle, FiPlus, FiUsers} from "react-icons/fi";

// stores
import {store} from "@/stores/store.js";

const headerList = [
    {
        id: 1,
        title: "menu.createChat",
        value: "createChat",
        icon: <FiMessageCircle size={20} color={store.getState().account.darkMode ? "#e2e8f0" : "#475569"}/>
    },
    {
        id: 2,
        title: "menu.createGroup",
        value: "createGroup",
        icon: <FiUsers size={20} color={store.getState().account.darkMode ? "#e2e8f0" : "#475569"}/>
    },
];


const ActionBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
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

                {
                    headerList.map(headerItem =>
                        <MenuItem
                            key={headerItem.id}
                            onClick={() => console.log(headerItem.value)}
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >

                            {headerItem.icon}

                            <Typography
                                variant="body2"
                                color="textPrimary"
                                fontWeight='bold'
                            >
                                {t(headerItem.title)}
                            </Typography>

                        </MenuItem>
                    )
                }

            </Menu>

        </>
    )
}

export default ActionBar;

