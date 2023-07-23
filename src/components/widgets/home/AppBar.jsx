// libraries
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {
    IconButton,
    Stack,
    Typography,
    Badge,
    MenuItem,
    Menu
} from "@mui/material";
import {
    FiBell,
    FiChevronLeft,
    FiChevronRight,
    FiMoreVertical,
    FiPhone,
    FiSearch,
    FiTrash,
    FiVideo
} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {removeActivePage} from "@/stores/slices/other.js";

const UserInfo = () => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: isTablet ? "center" : "start",
                alignItems: "center",
                width: "max-content",
                cursor: "pointer"
            }}
        >

            <Badge
                color="success"
                variant="dot"
                overlap='circular'
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >

                <LazyLoadImage
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                    style={{borderRadius: "50%"}}
                />

            </Badge>

            <Stack
                direction="column"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                }}
            >

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    fontWeight='bold'
                    noWrap
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    noWrap
                >
                    {t("typography.lastSeen")}
                    11:11
                </Typography>

            </Stack>

        </Stack>
    )
}

const MobileToolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {darkMode} = useSelector(state => state.account);
    const {t} = useTranslation();

    return (
        <>

            <IconButton
                variant="text"
                color="secondary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiMoreVertical
                    size={20}
                    color={darkMode ? "#e2e8f0" : "#475569"}
                />
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

                    <FiSearch
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
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

                    <FiVideo
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
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

                    <FiPhone
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
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

                    <FiTrash
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.deleteChat")}
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

                    <FiBell
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.muteChat")}
                    </Typography>

                </MenuItem>

            </Menu>

        </>
    )
}

const DesktopToolbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {darkMode} = useSelector(state => state.account);
    const {t} = useTranslation();

    return(
        <>

            <IconButton
                variant="text"
                color="secondary"
            >
                <FiSearch
                    size={20}
                    color={darkMode ? "#e2e8f0" : "#475569"}
                />
            </IconButton>

            <IconButton
                variant="text"
                color="secondary"
            >
                <FiVideo
                    size={20}
                    color={darkMode ? "#e2e8f0" : "#475569"}
                />
            </IconButton>

            <IconButton
                variant="text"
                color="secondary"
            >
                <FiPhone
                    size={20}
                    color={darkMode ? "#e2e8f0" : "#475569"}
                />
            </IconButton>

            <IconButton
                variant="text"
                color="secondary"
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <FiMoreVertical
                    size={20}
                    color={darkMode ? "#e2e8f0" : "#475569"}
                />
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

                    <FiTrash
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.deleteChat")}
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

                    <FiBell
                        size={20}
                        color={darkMode ? "#e2e8f0" : "#475569"}
                    />

                    <Typography
                        variant="body2"
                        color="textPrimary"
                        fontWeight='bold'
                    >
                        {t("menu.muteChat")}
                    </Typography>

                </MenuItem>

            </Menu>

        </>
    )
}

const ToolBar = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: 'center',
            }}
        >

            {
                isTablet ? (
                    <MobileToolbar/>
                ) : (
                    <DesktopToolbar/>
                )
            }

        </Stack>
    )
}

const AppBar = () => {

    const dispatch = useDispatch();
    const {darkMode , language} = useSelector(state => state.account);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="header"
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 70,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            {
                isTablet && (
                    <IconButton
                        variant="text"
                        color="secondary"
                        onClick={() => dispatch(removeActivePage())}
                    >
                        {
                            language === "fa" ? (
                                <FiChevronRight
                                    size={20}
                                    color={darkMode ? "#e2e8f0" : "#475569"}
                                />
                            ) : (
                                <FiChevronLeft
                                    size={20}
                                    color={darkMode ? "#e2e8f0" : "#475569"}
                                />
                            )
                        }
                    </IconButton>
                )
            }

            <UserInfo/>

            <ToolBar/>

        </Stack>
    )
}

export default AppBar;