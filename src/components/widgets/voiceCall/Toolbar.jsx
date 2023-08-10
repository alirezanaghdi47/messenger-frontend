// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {
    IconButton,
    Stack,
    Typography,
    MenuItem,
    Menu,
    Box
} from "@mui/material";
import {FiMoreVertical, FiPhone, FiTrash} from "react-icons/fi";

const MobileToolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();

    return (
        <>
            <IconButton
                variant="text"
                color="ternary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiMoreVertical size={20}/>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
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
                >

                    <FiPhone size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.voiceCall")}
                    </Typography>

                </MenuItem>

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiTrash size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.deleteAll")}
                    </Typography>

                </MenuItem>

            </Menu>

        </>
    )
}

const DesktopToolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation();

    return (
        <Stack
            component="ul"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: 'center',
            }}
        >

            <Box component="li">

                <IconButton
                    variant="text"
                    color="ternary"
                >
                    <FiPhone size={20}/>
                </IconButton>

            </Box>

            <Box component="li">

                <IconButton
                    variant="text"
                    color="ternary"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                    <FiMoreVertical size={20}/>
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
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
                    >

                        <FiTrash size={20}/>

                        <Typography
                            variant="body2"
                            color="textSecondary"
                            fontWeight='bold'
                        >
                            {t("menu.deleteAll")}
                        </Typography>

                    </MenuItem>

                </Menu>

            </Box>

        </Stack>
    )
}

const Toolbar = () => {
    const isDesktop = useMediaQuery('(max-width: 992px)');
    return isDesktop ? <MobileToolbar/> : <DesktopToolbar/>
}

export default Toolbar;