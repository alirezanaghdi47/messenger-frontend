// libraries
import {useDispatch, useSelector} from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {format} from "date-fns";
import {enUS, faIR} from "date-fns/locale";
import {Box, Container, IconButton, Modal, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiUser, FiX} from "react-icons/fi";

// stores
import {hideModal} from "stores/slices/appSlice";

const ModalHeader = ({data}) => {

    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);

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

                {
                    data?.userId?.avatar ? (
                        <LazyLoadImage
                            src={data?.userId?.avatar}
                            alt={data?.userId?.userName}
                            visibleByDefault
                            width={40}
                            height={40}
                            effect='blur'
                            style={{borderRadius: "50%"}}
                        />
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                bgcolor: "background.default",
                                color: "ternary.main",
                                width: 40,
                                height: 40,
                                borderRadius: "50%"
                            }}
                        >
                            <FiUser size={20}/>
                        </Box>
                    )
                }

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
                        {data?.userId?.userName}
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textPrimary"
                        noWrap
                    >
                        {
                            format(
                                new Date(data?.createdAt),
                                language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                                {locale: language === "en" ? enUS : faIR, addSuffix: true}
                            )
                        }
                    </Typography>

                </Stack>

            </Stack>

            <IconButton
                variant="text"
                color="ternary"
                onClick={() => dispatch(hideModal())}
            >
                <FiX size={20}/>
            </IconButton>

        </Stack>
    )
}

const ModalContent = ({data}) => {

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

                <LazyLoadImage
                    src={data.content}
                    alt={data.name}
                    visibleByDefault
                    width="100%"
                    height="100%"
                    effect='blur'
                    style={{borderRadius: 8}}
                />

            </Box>

        </Container>
    )
}

const ImagePreviewModal = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === '-${modal.data._id}')}
            onClose={() => dispatch(hideModal())}
            disableAutoFocus
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
                <ModalHeader data={modal.data}/>
                <ModalContent data={modal.data}/>
            </Stack>

        </Modal>
    )
}

export default ImagePreviewModal;