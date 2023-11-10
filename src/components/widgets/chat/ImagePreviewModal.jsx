// libraries
import {useMediaQuery} from "@react-hooks-library/core";
import {AsyncImage} from "loadable-image";
import {Box, Container, IconButton, Modal, Stack, Typography} from "@mui/material";
import {FiX} from "react-icons/fi";

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

                <AsyncImage
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                    alt="avatar"
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                    }}
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
            sx={{
                marginTop: "auto",
                marginBottom: "auto",
            }}
        >

            <Box
                sx={{
                    width: "100%",
                    maxWidth: 992,
                }}
            >

                <AsyncImage
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/desktop-1.jpg"
                    alt="background"
                    style={{
                        width: "100%",
                        height: "100%",
                        aspectRatio: 3 / 2,
                        borderRadius: 8,
                    }}
                    loader={<Box sx={{ bgcolor: "ternary.main" }}/>}
                />

            </Box>

        </Container>
    )
}

const ImagePreviewModal = ({isOpen, onClose}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

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
                    width: isTablet ? "100%" : 500,
                    height: isTablet ? "100%" : "max-content",
                    bgcolor: "background.paper",
                    borderRadius: isTablet ? 0 : 1,
                    padding: 2,
                }}
            >

                <ModalHeader onClose={onClose}/>

                <ModalContent/>

            </Stack>

        </Modal>
    )
}

export default ImagePreviewModal;