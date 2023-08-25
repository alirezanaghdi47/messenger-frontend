// libraries
import ReactPlayer from "react-player";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {alpha, Box, Container, IconButton, Modal, Stack, Typography, useTheme} from "@mui/material";
import {FiX} from "react-icons/fi";

// assets
import avatar from "../../../assets/images/avatar.png";

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

            <Box
                sx={{
                    position: 'absolute',
                    zIndex: 50,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50% , -50%)",
                    width: "calc(100% - 32px)",
                    maxWidth: 992,
                }}
            >

                <ReactPlayer
                    url='https://hajifirouz2.cdn.asset.aparat.com/aparat-video/8c46df8e952644285549b8b912df4ad554231257-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIyNTY0ODEzODE4ZWEzMGFkNTgxNTIyMzdhM2M2ZTIwIiwiZXhwIjoxNjkyNzM2NDg2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.poea6DPKTfMWXB9qe7dKVOHJ2xmF_-vMJYjvWIkYcMg'
                    width="100%"
                    height="100%"
                />

            </Box>

        </Container>
    )
}

const VideoPlayerModal = ({isOpen , onClose}) => {

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

export default VideoPlayerModal;