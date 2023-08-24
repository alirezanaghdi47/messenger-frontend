// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {alpha, Box, Card, Chip, Container, IconButton, Modal, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";
import {FiX} from "react-icons/fi";

// assets
import avatar from "../../../../assets/images/avatar.png";
import background from "../../../../assets/images/desktop-2.png";

// utils
import {convertByte} from "../../../../utils/functions";

const ModalHeader = ({onClose}) => {

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
                onClick={onClose}
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

            <Card
                sx={{
                    position: 'absolute',
                    zIndex: 50,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50% , -50%)",
                    width: "calc(100% - 32px)",
                    maxWidth: 992,
                    height: "max-content",
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

        </Container>
    )
}

const ImageModal = ({isOpen , onClose}) => {

    const theme = useTheme();

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

                <ModalHeader onClose={onClose}/>

                <ModalContent/>

            </Stack>

        </Modal>
    )
}

const ImageMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    const [showModal , setShowModal] = useState(false);

    return (
        <>

            <Card
                sx={{
                    position: "relative",
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    bgcolor: message.me ? "primary.light" : "background.default",
                    padding: 1.5,
                    cursor: "pointer"
                }}
                onClick={() => setShowModal(true)}
            >

                <Box sx={{position: "relative"}}>

                    <LazyLoadImage
                        src={message.content}
                        alt="image"
                        width="100%"
                        height="100%"
                        style={{
                            maxWidth: 300,
                            borderRadius: 8,
                        }}
                    />

                    <Box
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <Chip
                            variant="caption"
                            color={message.me ? "primary" : "secondary"}
                            size="small"
                            label={convertByte(300000)}
                        />

                    </Box>

                </Box>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

            <ImageModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}

export default ImageMessage;