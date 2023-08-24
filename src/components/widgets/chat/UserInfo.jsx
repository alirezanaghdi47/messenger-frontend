// libraries
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useMediaQuery} from "@react-hooks-library/core";
import {Box, Grid, IconButton, Modal, Stack, Tab, Tabs, Typography} from "@mui/material";
import {FiFile, FiFilm, FiImage, FiMapPin, FiMusic, FiX} from "react-icons/fi";

// assets
import avatar from "../../../assets/images/avatar.png";
import file from "../../../assets/other/lorem-ipsum.pdf";
import image from "../../../assets/other/lorem-ipsum.jpg";
import video from "../../../assets/other/lorem-ipsum.mp4";
import voice from "../../../assets/other/lorem-ipsum.mp3";

// components
import {FileLog, ImageLog, LocationLog, VideoLog, VoiceLog} from "./Logs";

const fileList = [
    {id: 1, type: "file", content: file},
    {id: 2, type: "file", content: file},
];

const imageList = [
    {id: 1, type: "image", content: image, me: true},
    {id: 2, type: "image", content: image, me: false},
];

const videoList = [
    {id: 1, type: "video", content: video, me: true},
    {id: 2, type: "video", content: video, me: false},
];

const voiceList = [
    {id: 1, type: "voice", content: voice, me: false},
    {id: 2, type: "voice", content: voice, me: true},
];

const locationList = [
    {id: 1, type: "location", content: [35, 51], me: true},
    {id: 2, type: "location", content: [35, 51], me: false},
];

const filterList = [
    {id: 1 , title: "menu.file", value: "file" , icon: <FiFile size={20}/>},
    {id: 2 , title: "menu.image", value: "image" , icon: <FiImage size={20}/>},
    {id: 3 , title: "menu.video", value: "video" , icon: <FiFilm size={20}/>},
    {id: 4 , title: "menu.voice", value: "voice" , icon: <FiMusic size={20}/>},
    {id: 5 , title: "menu.location", value: "location" , icon: <FiMapPin size={20}/>},
];

const ModalHeader = ({onClose}) => {

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
                onClick={onClose}
            >
                <FiX size={20}/>
            </IconButton>

        </Stack>
    )
}

const ModalContent = () => {

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    const [filter, setFilter] = useState("file");

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >

                <Tabs
                    value={filter}
                    onChange={(event, newValue) => setFilter(newValue)}
                    variant={isMobile ? "scrollable" : "fullWidth"}
                    allowScrollButtonsMobile={isTablet}
                    sx={{width: "100%"}}
                >

                    {
                        filterList.map(filterItem =>
                            <Tab
                                label={t(filterItem.title)}
                                value={filterItem.value}
                            />
                        )
                    }

                </Tabs>

            </Box>

            <Grid
                component="ul"
                container
                spacing={2}
                sx={{width: "100%"}}
            >

                {filter === "image" && imageList.map(item => item.type === "image" && <ImageLog message={item}/>)}
                {filter === "file" && fileList.map(item => item.type === "file" && <FileLog message={item}/>)}
                {filter === "voice" && voiceList.map(item => item.type === "voice" && <VoiceLog message={item}/>)}
                {filter === "video" && videoList.map(item => item.type === "video" && <VideoLog message={item}/>)}
                {filter === "location" && locationList.map(item => item.type === "location" && <LocationLog message={item}/>)}

            </Grid>

        </Stack>
    )
}

const HistoryModal = ({isOpen, onClose}) => {

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
                gap={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    width: isTablet ? "100%" : 640,
                    height: isTablet ? "100%" : "max-content",
                    bgcolor: "background.paper",
                    borderRadius: isTablet ? 0 : 1,
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

const UserInfo = () => {

    const {t} = useTranslation();

    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "max-content",
                    cursor: "pointer"
                }}
                onClick={() => setShowModal(true)}
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
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start"
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
                        color="textSecondary"
                        noWrap
                    >
                        {t("typography.lastSeen")}
                        &nbsp;
                        11:11
                    </Typography>

                </Stack>

            </Stack>

            <HistoryModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

        </>
    )
}

export default UserInfo;