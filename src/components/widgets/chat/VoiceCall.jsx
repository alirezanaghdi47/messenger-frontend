// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {IconButton, MenuItem, Modal, Stack, Typography} from "@mui/material";
import {FiMicOff, FiPhone, FiPhoneOff} from "react-icons/fi";

// assets
import avatar from "../../../assets/images/avatar.png";

const ModalHeader = () => {

    return (
        <Stack
            direction="column"
            gap={1}
            sx={{
                position: "absolute",
                zIndex: 100,
                top: 32,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "max-content",
                bgcolor: 'background.paper',
                borderRadius: 1,
                padding: 2,
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                width={40}
                height={40}
                style={{borderRadius: "50%"}}
            />

            <Typography
                variant="subtitle2"
                color="textPrimary"
                fontWeight='bold'
                noWrap
            >
                علیرضا نقدی
            </Typography>

        </Stack>
    )
}

const ModalContent = () => {

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                position: "absolute",
                zIndex: 50,
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >

        </Stack>
    )
}

const ModalFooter = ({onClose}) => {

    const {language} = useSelector(state => state.setting.appearance);

    return (
        <Stack
            direction='column'
            gap={2}
            sx={{
                position: "absolute",
                zIndex: 100,
                bottom: 32,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "max-content",
                bgcolor: 'background.paper',
                borderRadius: 1,
                padding: 2,
            }}
        >

            <Stack
                direction="row"
                gap={2}
                sx={{
                    direction: language === "en" ? "rtl" : "ltr",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <IconButton
                    variant="text"
                    color="ternary"
                    size="large"
                >
                    <FiMicOff size={20}/>
                </IconButton>

                <IconButton
                    variant="contained"
                    color="error"
                    size="large"
                    onClick={onClose}
                >
                    <FiPhoneOff size={20}/>
                </IconButton>

            </Stack>

        </Stack>
    )
}

const VoiceCallModal = ({isOpen, onClose}) => {

    const {background} = useSelector(state => state.setting.appearance);

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Stack
                direction="column"
                gap={2}
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    bgcolor: "background.paper",
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                }}
            >

                <ModalHeader/>

                <ModalContent/>

                <ModalFooter onClose={onClose}/>

            </Stack>

        </Modal>
    )
}

export const MobileVoiceCall = () => {

    const {t} = useTranslation();

    const [showModal , setShowModal] = useState(false);

    return (
        <>

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => setShowModal(true)}
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

            <VoiceCallModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}

export const DesktopVoiceCall = () => {

    const [showModal , setShowModal] = useState(false);

    return (
        <>

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={() => setShowModal(true)}
            >
                <FiPhone size={20}/>
            </IconButton>

            <VoiceCallModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}
