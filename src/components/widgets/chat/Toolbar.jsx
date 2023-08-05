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
import {
    FiBell,
    FiMoreVertical,
    FiPhone,
    FiSearch,
    FiTrash, FiVideo,
} from "react-icons/fi";

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

                    <FiSearch size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.searchChat")}
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

                    <FiVideo size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.videoCall")}
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

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                    }}
                >

                    <FiBell size={20}/>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        fontWeight='bold'
                    >
                        {t("menu.muteChat")}
                    </Typography>

                </MenuItem>

                {/*<MenuItem*/}
                {/*    sx={{*/}
                {/*        display: "flex",*/}
                {/*        gap: 1,*/}
                {/*        justifyContent: "start",*/}
                {/*        alignItems: "center",*/}
                {/*    }}*/}
                {/*>*/}

                {/*    <FiLogOut size={20}/>*/}

                {/*    <Typography*/}
                {/*        variant="body2"*/}
                {/*        color="textSecondary"*/}
                {/*        fontWeight='bold'*/}
                {/*    >*/}
                {/*        {t("menu.leaveGroup")}*/}
                {/*    </Typography>*/}

                {/*</MenuItem>*/}

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
                    <FiSearch size={20}/>
                </IconButton>

            </Box>

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
                >
                    <FiVideo size={20}/>
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

                    <MenuItem
                        sx={{
                            display: "flex",
                            gap: 1,
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                    >

                        <FiBell size={20}/>

                        <Typography
                            variant="body2"
                            color="textSecondary"
                            fontWeight='bold'
                        >
                            {t("menu.muteChat")}
                        </Typography>

                    </MenuItem>

                    {/*<MenuItem*/}
                    {/*    sx={{*/}
                    {/*        display: "flex",*/}
                    {/*        gap: 1,*/}
                    {/*        justifyContent: "start",*/}
                    {/*        alignItems: "center",*/}
                    {/*    }}*/}
                    {/*>*/}

                    {/*    <FiLogOut size={20}/>*/}

                    {/*    <Typography*/}
                    {/*        variant="body2"*/}
                    {/*        color="textSecondary"*/}
                    {/*        fontWeight='bold'*/}
                    {/*    >*/}
                    {/*        {t("menu.leaveGroup")}*/}
                    {/*    </Typography>*/}

                    {/*</MenuItem>*/}

                </Menu>

            </Box>

        </Stack>
    )
}

const Toolbar = () => {
    const isTablet = useMediaQuery('(max-width: 768px)');
    return isTablet ? <MobileToolbar/> : <DesktopToolbar/>
}

export default Toolbar;