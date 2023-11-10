// libraries
import {useSelector} from "react-redux";
import ReactPlayer from "react-player";
import {useMediaQuery} from "@react-hooks-library/core";
import {AsyncImage} from "loadable-image";
import {Box, Container, IconButton, Modal, Stack, Typography} from "@mui/material";
import {FiMicOff, FiPhoneOff, FiRefreshCw, FiVideoOff} from "react-icons/fi";

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
                bgcolor: 'background.default',
                borderRadius: 1,
                padding: 2,
            }}
        >

            <AsyncImage
                src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                alt="avatar"
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                }}
                loader={<Box sx={{ bgcolor: "ternary.main" }}/>}
            />

            <Typography
                variant="subtitle2"
                color="textPrimary"
                fontWeight='bold'
                noWrap
            >
                سهیل نادری
            </Typography>

            <Typography
                variant="caption"
                color="textPrimary"
                fontWeight='bold'
                noWrap
            >
                01:00
            </Typography>

        </Stack>
    )
}

const ModalContent = () => {

    const isTablet = useMediaQuery('(max-width: 768px)');

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

                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 50,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50% , -50%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "calc(100% - 32px)",
                        maxWidth: 992,
                    }}
                >

                    <ReactPlayer
                        url="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"
                        width="100%"
                        height="100%"
                        playing={true}
                    />

                    <Box
                        sx={{
                            position: 'absolute',
                            zIndex: 100,
                            bottom: isTablet ? -104 : 16,
                            left: isTablet ? "50%" : 16,
                            transform: isTablet ? "translateX(-50%)" : "unset",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: isTablet ? 150 : 200,
                        }}
                    >

                        <ReactPlayer
                            url="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"
                            width="100%"
                            height="100%"
                            playing={true}
                        />

                    </Box>

                </Box>

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
                bgcolor: 'background.default',
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

export default VideoCallModal;