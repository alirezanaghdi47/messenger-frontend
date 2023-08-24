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
} from "@mui/material";
import {FiMoreVertical, FiTrash2} from "react-icons/fi";

// components
import {DesktopVoiceCall, MobileVoiceCall} from "./VoiceCall";
import {DesktopVideoCall, MobileVideoCall} from "./VideoCall";

const MobileToolbarAction = () => {

    const {t} = useTranslation();

    return (
        <MenuItem
            sx={{
                display: "flex",
                gap: 1,
                justifyContent: "start",
                alignItems: "center",
                color: "ternary.main"
            }}
        >

            <FiTrash2 size={20}/>

            <Typography
                variant="body2"
                color="textSecondary"
                fontWeight='bold'
            >
                {t("menu.deleteContact")}
            </Typography>

        </MenuItem>
    )
}

const DesktopToolbarAction = () => {

    const {t} = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <>
            <IconButton
                component="li"
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
                        color: "ternary.main"
                    }}
                >

                    <FiTrash2 size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.deleteContact")}
                    </Typography>

                </MenuItem>

            </Menu>
        </>
    )
}

const MobileToolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

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

                <MobileVoiceCall/>

                <MobileVideoCall/>

                <MobileToolbarAction/>

            </Menu>

        </>
    )
}

const DesktopToolbar = () => {

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

            <DesktopVoiceCall/>

            <DesktopVideoCall/>

            <DesktopToolbarAction/>

        </Stack>
    )
}

const Toolbar = () => {
    const isDesktop = useMediaQuery('(max-width: 992px)');
    return isDesktop ? <MobileToolbar/> : <DesktopToolbar/>
}

export default Toolbar;