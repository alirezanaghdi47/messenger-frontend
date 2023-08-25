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
import {FiMoreVertical, FiPhone, FiTrash2, FiVideo} from "react-icons/fi";

// components
import VoiceCallModal from "./VoiceCallModal";
import VideoCallModal from "./VideoCallModal";

const MobileToolbar = ({
                           anchorEl,
                           isOpenDropdown,
                           onCloseDropdown,
                           onOpenDropdown,
                           onOpenVideoCall,
                           onOpenVoiceCall
                       }) => {

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
                onClick={onOpenVoiceCall}
            >
                <FiPhone size={20}/>
            </IconButton>

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={onOpenVideoCall}
            >
                <FiVideo size={20}/>
            </IconButton>

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={onOpenDropdown}
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
                open={isOpenDropdown}
                onClose={onCloseDropdown}
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

        </Stack>
    )
}

const DesktopToolbar = ({
                            anchorEl,
                            isOpenDropdown,
                            onCloseDropdown,
                            onOpenDropdown,
                            onOpenVideoCall,
                            onOpenVoiceCall
                        }) => {

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
                onClick={onOpenDropdown}
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
                open={isOpenDropdown}
                onClose={onCloseDropdown}
            >

                <MenuItem
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "start",
                        alignItems: "center",
                        color: "ternary.main"
                    }}
                    onClick={onOpenVoiceCall}
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
                    onClick={onOpenVideoCall}
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

        </Stack>
    )
}

const Toolbar = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    const [anchorEl, setAnchorEl] = useState(null);
    const [showVoiceCallModal, setShowVoiceCallModal] = useState(false);
    const [showVideoCallModal, setShowVideoCallModal] = useState(false);

    const _handleShowDropdown = (e) => setAnchorEl(e.currentTarget);
    const _handleHideDropdown = (e) => setAnchorEl(null);
    const _handleShowVoiceCallModal = () => {
        setShowVoiceCallModal(true);
        _handleHideDropdown();
    }
    const _handleHideVoiceCallModal = () => {
        setShowVoiceCallModal(false);
        _handleHideDropdown();
    }
    const _handleShowVideoCallModal = () => {
        setShowVideoCallModal(true);
        _handleHideDropdown();
    }
    const _handleHideVideoCallModal = () => {
        setShowVideoCallModal(false);
        _handleHideDropdown();
    }

    return (
        <>

            {
                isTablet ?
                    <DesktopToolbar
                        anchorEl={anchorEl}
                        isOpenDropdown={Boolean(anchorEl)}
                        onOpenDropdown={_handleShowDropdown}
                        onCloseDropdown={_handleHideDropdown}
                        onOpenVoiceCall={_handleShowVoiceCallModal}
                        onOpenVideoCall={_handleShowVideoCallModal}
                    /> :
                    <MobileToolbar
                        anchorEl={anchorEl}
                        isOpenDropdown={Boolean(anchorEl)}
                        onOpenDropdown={_handleShowDropdown}
                        onCloseDropdown={_handleHideDropdown}
                        onOpenVoiceCall={_handleShowVoiceCallModal}
                        onOpenVideoCall={_handleShowVideoCallModal}
                    />
            }

            <VoiceCallModal
                isOpen={showVoiceCallModal}
                onClose={_handleHideVoiceCallModal}
            />

            <VideoCallModal
                isOpen={showVideoCallModal}
                onClose={_handleHideVideoCallModal}
            />

        </>
    )
}

export default Toolbar;