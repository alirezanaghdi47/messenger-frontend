// libraries
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {formatDistanceToNow} from "date-fns";
import {enUS, faIR} from "date-fns/locale";
import {Box, Container, IconButton, Modal, Stack, Typography , useMediaQuery} from "@mui/material";
import {FiX} from "react-icons/fi";

// components
import VideoPlayer from "components/modules/VideoPlayer";

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

                <LazyLoadImage
                    src={data?.userId?.avatar}
                    alt={data?.userId?.userName}
                    visibleByDefault
                    width={40}
                    height={40}
                    effect='blur'
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
                        {data?.userId?.userName}
                    </Typography>

                    <Typography
                        variant="caption"
                        color="textPrimary"
                        noWrap
                    >
                        {
                            formatDistanceToNow(
                                data?.createdAt,
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: 992,
                }}
            >

                <VideoPlayer
                    src={data?.content}
                    thumbnail={data?.thumbnail}
                />

            </Box>

        </Container>
    )
}

const VideoPlayerModal = () => {

    const dispatch = useDispatch();
    const {modal} = useSelector(state => state.app);
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={Boolean(modal?.isOpen && modal?.type === "videoPlayer")}
            onClose={() => dispatch(hideModal())}
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
                    width: isTablet ? "100%" : "max-content",
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

export default VideoPlayerModal;