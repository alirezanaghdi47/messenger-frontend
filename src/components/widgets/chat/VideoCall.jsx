// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import ReactPlayer from 'react-player';
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Card, Container, IconButton, MenuItem, Modal, Stack, Typography} from "@mui/material";
import {FiMicOff, FiPhoneOff, FiRefreshCw, FiVideo, FiVideoOff} from "react-icons/fi";

// components
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
        <Container
            maxWidth="xl"
            disableGutters
        >

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

                <Card
                    sx={{
                        position: 'absolute',
                        zIndex: 50,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50% , -50%)",
                        width: "calc(100% - 32px)",
                        maxWidth: 992,
                        borderRadius: 1,
                        boxShadow: 3,
                        padding: 1
                    }}
                >

                    <ReactPlayer
                        url='https://hajifirouz2.cdn.asset.aparat.com/aparat-video/8c46df8e952644285549b8b912df4ad554231257-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIyNTY0ODEzODE4ZWEzMGFkNTgxNTIyMzdhM2M2ZTIwIiwiZXhwIjoxNjkyNzM2NDg2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.poea6DPKTfMWXB9qe7dKVOHJ2xmF_-vMJYjvWIkYcMg'
                        width="100%"
                        height="100%"
                    />

                    <Card
                        sx={{
                            position: 'absolute',
                            zIndex: 100,
                            bottom: 0,
                            left: 0,
                            borderRadius: 1,
                            boxShadow: 0,
                            padding: 1
                        }}
                    >

                        <ReactPlayer
                            url='https://hajifirouz2.cdn.asset.aparat.com/aparat-video/8c46df8e952644285549b8b912df4ad554231257-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIyNTY0ODEzODE4ZWEzMGFkNTgxNTIyMzdhM2M2ZTIwIiwiZXhwIjoxNjkyNzM2NDg2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.poea6DPKTfMWXB9qe7dKVOHJ2xmF_-vMJYjvWIkYcMg'
                            width="100%"
                            height={100}
                        />

                    </Card>

                </Card>

            </Stack>

        </Container>
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
                    <FiRefreshCw size={20}/>
                </IconButton>

                <IconButton
                    variant="text"
                    color="ternary"
                    size="large"
                >
                    <FiMicOff size={20}/>
                </IconButton>

                <IconButton
                    variant="text"
                    color="ternary"
                    size="large"
                >
                    <FiVideoOff size={20}/>
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

const VideoCallModal = ({isOpen, onClose}) => {

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

export const MobileVideoCall = () => {

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

                <FiVideo size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.videoCall")}
                </Typography>

            </MenuItem>

            <VideoCallModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}

export const DesktopVideoCall = () => {

    const [showModal , setShowModal] = useState(false);

    return (
        <>

            <IconButton
                component="li"
                variant="text"
                color="ternary"
                onClick={() => setShowModal(true)}
            >
                <FiVideo size={20}/>
            </IconButton>

            <VideoCallModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}
