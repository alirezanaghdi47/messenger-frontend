// libraries
import {useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Container, IconButton, Modal, Stack, Typography} from "@mui/material";
import {FiArrowRight, FiPhone, FiPhoneOff} from "react-icons/fi";

const ModalHeader = () => {

    return (
        <Stack
            direction="row"
            gap={4}
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

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <LazyLoadImage
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
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
                    سهیل نادری
                </Typography>

            </Stack>

            <Stack
                direction="column"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <FiArrowRight size={20}/>

            </Stack>

            <Stack
                direction="column"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <LazyLoadImage
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
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
                    variant="contained"
                    color="success"
                    size="large"
                >
                    <FiPhone size={20}/>
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

const IncomingCallModal = ({isOpen, onClose}) => {

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

                <ModalHeader />

                <ModalContent/>

                <ModalFooter onClose={onClose}/>

            </Stack>

        </Modal>
    )
}

export default IncomingCallModal;

