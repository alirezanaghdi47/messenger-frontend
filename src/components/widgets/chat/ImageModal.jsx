// libraries
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Modal, Stack, IconButton, Typography, useTheme, alpha, Container, Card} from "@mui/material";
import {FiX} from "react-icons/fi";

// assets
import avatar from "../../../assets/images/avatar.png";
import background from "../../../assets/images/desktop-2.png";

const ModalHeader = () => {

    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >

                <LazyLoadImage
                    src={avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    style={{borderRadius: "50%"}}
                />

                <Stack
                    direction="column"
                    gap={1}
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
                        color="textPrimary"
                        noWrap
                    >
                        Front End Developer
                    </Typography>

                </Stack>

            </Stack>

            <IconButton
                variant="text"
                color="ternary"
            >
                <FiX size={20}/>
            </IconButton>

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
                        padding: 1
                    }}
                >

                    <LazyLoadImage
                        src={background}
                        alt="background"
                        width="100%"
                        height="100%"
                        style={{borderRadius: 8}}
                    />

                </Card>

            </Stack>

        </Container>
    )
}

const ImageModal = () => {

    const theme = useTheme();

    return (
        <Modal
            open={true}
            onClose={() => {
                return null
            }}
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    bgcolor: alpha(theme.palette.background.paper, 0.9),
                    borderRadius: 0,
                    boxShadow: 1,
                    padding: 2,
                }}
            >

                <ModalHeader/>

                <ModalContent/>

            </Stack>

        </Modal>
    )
}

export default ImageModal;

