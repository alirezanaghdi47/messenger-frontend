// libraries
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
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
import {useModal} from "hooks/useModal";
const VoiceCallModal = Loadable(() => import("components/widgets/chat/VoiceCallModal"));
const VideoCallModal = Loadable(() => import("components/widgets/chat/VideoCallModal"));
const IncomingCallModal = Loadable(() => import("components/widgets/chats/IncomingCallModal"));

const MobileToolbar = ({
                           anchorEl,
                           isOpenDropdownMenu,
                           onCloseDropdownMenu,
                           onOpenDropdownMenu,
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

                {/*<MenuItem*/}
                {/*    sx={{*/}
                {/*        display: "flex",*/}
                {/*        gap: 1,*/}
                {/*        justifyContent: "start",*/}
                {/*        alignItems: "center",*/}
                {/*        color: "error.main"*/}
                {/*    }}*/}
                {/*>*/}

                {/*    <FiLogOut size={20}/>*/}

                {/*    <Typography*/}
                {/*        variant="body2"*/}
                {/*        color="error"*/}
                {/*        fontWeight='bold'*/}
                {/*    >*/}
                {/*        {t("menu.leave")}*/}
                {/*    </Typography>*/}

                {/*</MenuItem>*/}

            </Menu>

        </Stack>
    )
}

const DesktopToolbar = ({
                            anchorEl,
                            isOpenDropdownMenu,
                            onCloseDropdownMenu,
                            onOpenDropdownMenu,
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
                        color: "error.main"
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

                {/*<MenuItem*/}
                {/*    sx={{*/}
                {/*        display: "flex",*/}
                {/*        gap: 1,*/}
                {/*        justifyContent: "start",*/}
                {/*        alignItems: "center",*/}
                {/*        color: "error.main"*/}
                {/*    }}*/}
                {/*>*/}

                {/*    <FiLogOut size={20}/>*/}

                {/*    <Typography*/}
                {/*        variant="body2"*/}
                {/*        color="error"*/}
                {/*        fontWeight='bold'*/}
                {/*    >*/}
                {/*        {t("menu.leave")}*/}
                {/*    </Typography>*/}

                {/*</MenuItem>*/}

            </Menu>

        </Stack>
    )
}

const Toolbar = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    const {anchorEl, isOpenDropdownMenu, _handleShowDropdownMenu, _handleHideDropdownMenu} = useDropdownMenu();
    const {isOpenModal: isOpenIncomingCallModal , _handleShowModal: _handleShowIncomingCallModal , _handleHideModal: _handleHideIncomingCallModal} = useModal();
    const {isOpenModal: isOpenVoiceCallModal , _handleShowModal: _handleShowVoiceCallModal , _handleHideModal: _handleHideVoiceCallModal} = useModal();
    const {isOpenModal: isOpenVideoCallModal , _handleShowModal: _handleShowVideoCallModal , _handleHideModal: _handleHideVideoCallModal} = useModal();

    // useEffect(() => {
    //     _handleShowIncomingCallModal();
    // }, []);

    return (
        <>

            {
                isTablet ?
                    <DesktopToolbar
                        anchorEl={anchorEl}
                        isOpenDropdownMenu={isOpenDropdownMenu}
                        onOpenDropdownMenu={_handleShowDropdownMenu}
                        onCloseDropdownMenu={_handleHideDropdownMenu}
                        onOpenVoiceCall={_handleShowVoiceCallModal}
                        onOpenVideoCall={_handleShowVideoCallModal}
                    /> :
                    <MobileToolbar
                        anchorEl={anchorEl}
                        isOpenDropdownMenu={isOpenDropdownMenu}
                        onOpenDropdownMenu={_handleShowDropdownMenu}
                        onCloseDropdownMenu={_handleHideDropdownMenu}
                        onOpenVoiceCall={_handleShowVoiceCallModal}
                        onOpenVideoCall={_handleShowVideoCallModal}
                    />
            }

            <VoiceCallModal
                isOpen={isOpenVoiceCallModal}
                onClose={_handleHideVoiceCallModal}
            />

            <VideoCallModal
                isOpen={isOpenVideoCallModal}
                onClose={_handleHideVideoCallModal}
            />

            <IncomingCallModal
                isOpen={isOpenIncomingCallModal}
                onClose={_handleHideIncomingCallModal}
            />

        </>
    )
}

export default Toolbar;