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
import {FiChevronLeft, FiChevronRight, FiMoreVertical, FiPhone, FiSearch, FiTrash, FiVideo} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

// stores
import {store} from "@/stores/store.js";
import {removeActivePage} from "@/stores/slices/other.js";

const toolBarList = [
    {
        id: 1,
        title: "menu.deleteChat",
        value: "deleteChat",
        icon: <FiTrash size={20} color={store.getState().account.darkMode ? "#e2e8f0" : "#475569"}/>
    },
];

const UserInfo = () => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Stack
            component="li"
            direction="row"
            gap={2}
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
                    style={{borderRadius: 8}}
                />

            </Badge>

            <Stack
                direction="column"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    width: "calc(100% - 72px)",
                }}
            >

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    fontWeight='bold'
                    noWrap
                    sx={{width: 150, overflow: "hidden"}}
                >
                    علیرضا نقدی
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    noWrap
                    sx={{width: 150, overflow: "hidden"}}
                >
                    {t("typography.lastSeen")} 11:11
                </Typography>

            </Stack>

        </Stack>
    )
}

const ToolBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const {darkMode} = useSelector(state => state.account);
    const {t} = useTranslation();

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

                {
                    toolBarList.map(toolBarItem =>
                        <MenuItem
                            key={toolBarItem.id}
                            onClick={() => console.log(toolBarItem.value)}
                            sx={{
                                display: "flex",
                                gap: 1,
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >

                            {toolBarItem.icon}

                            <Typography
                                variant="body2"
                                color="textPrimary"
                                fontWeight='bold'
                            >
                                {t(toolBarItem.title)}
                            </Typography>

                        </MenuItem>
                    )
                }

            </Menu>

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

