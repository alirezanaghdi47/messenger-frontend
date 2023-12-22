// libraries
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {toast} from "react-hot-toast";
import {
    IconButton,
    Stack,
    Typography,
    MenuItem,
    Menu,
    useMediaQuery
} from "@mui/material";
import {FiMoreVertical, FiPhone, FiTrash2, FiVideo} from "react-icons/fi";

// components
import {useDropdownMenu} from "hooks/useDropdownMenu";

// stores
import {showModal} from "stores/slices/appSlice";

const DesktopToolbar = ({
                            data,
                            anchorEl,
                            isOpenDropdownMenu,
                            onCloseDropdownMenu,
                            onOpenDropdownMenu,
                        }) => {

    const dispatch = useDispatch();
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

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={() => {
                    onCloseDropdownMenu();
                    toast.success(t("typography.comingSoon"));
                }}
            >
                <FiPhone size={20}/>
            </IconButton>

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={() => {
                    onCloseDropdownMenu();
                    toast.success(t("typography.comingSoon"));
                }}
            >
                <FiVideo size={20}/>
            </IconButton>

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={onOpenDropdownMenu}
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
                open={isOpenDropdownMenu}
                onClose={onCloseDropdownMenu}
            >

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "error.main"
                    }}
                    onClick={() => {
                        onCloseDropdownMenu();
                        dispatch(showModal({type: "deleteContact", data: data}));
                    }}
                >

                    <FiTrash2 size={20}/>

                    <Typography
                        variant="body2"
                        color="error"
                        fontWeight='bold'
                    >
                        {t("menu.delete")}
                    </Typography>

                </MenuItem>

            </Menu>

        </Stack>
    )
}

const MobileToolbar = ({
                           data,
                           anchorEl,
                           isOpenDropdownMenu,
                           onCloseDropdownMenu,
                           onOpenDropdownMenu,
                       }) => {

    const dispatch = useDispatch();
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

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={onOpenDropdownMenu}
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
                open={isOpenDropdownMenu}
                onClose={onCloseDropdownMenu}
            >

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "ternary.main"
                    }}
                    onClick={() => {
                        onCloseDropdownMenu();
                        toast.success(t("typography.comingSoon"));
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
                        color: "ternary.main"
                    }}
                    onClick={() => {
                        onCloseDropdownMenu();
                        toast.success(t("typography.comingSoon"));
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
                        color: "error.main"
                    }}
                    onClick={() => {
                        onCloseDropdownMenu();
                        dispatch(showModal({type: "deleteContact", data: data}));
                    }}
                >

                    <FiTrash2 size={20}/>

                    <Typography
                        variant="body2"
                        color="error"
                        fontWeight='bold'
                    >
                        {t("menu.delete")}
                    </Typography>

                </MenuItem>

            </Menu>

        </Stack>
    )
}

const Toolbar = ({data}) => {

    const isTablet = useMediaQuery('(min-width: 768px)');
    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();

    return (
        <>

            {
                isTablet ?
                    <DesktopToolbar
                        data={data}
                        anchorEl={anchorEl}
                        isOpenDropdownMenu={isOpenDropdownMenu}
                        onOpenDropdownMenu={_handleShowDropdownMenu}
                        onCloseDropdownMenu={_handleHideDropdownMenu}
                    /> :
                    <MobileToolbar
                        data={data}
                        anchorEl={anchorEl}
                        isOpenDropdownMenu={isOpenDropdownMenu}
                        onOpenDropdownMenu={_handleShowDropdownMenu}
                        onCloseDropdownMenu={_handleHideDropdownMenu}
                    />
            }

        </>
    )
}

export default Toolbar;