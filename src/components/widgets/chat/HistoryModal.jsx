// libraries
import {useState} from "react";
import SimpleBar from "simplebar-react";
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
import {LocationLog, ImageLog, FileLog, VoiceLog, VideoLog} from "./Logs";

const logList = [
    {id: 1, type: "file", content: file},
    {id: 2, type: "file", content: file},
    {id: 3, type: "image", content: image, me: true},
    {id: 4, type: "image", content: image, me: false},
    {id: 5, type: "video", content: video, me: true},
    {id: 6, type: "video", content: video, me: false},
    {id: 7, type: "voice", content: voice, me: false},
    {id: 8, type: "voice", content: voice, me: true},
    {id: 9, type: "location", content: [35, 51], me: true},
    {id: 10, type: "location", content: [35, 51], me: false},
];

const filterList = [
    {id: 1, title: "menu.file", value: "file", icon: <FiFile size={20}/>},
    {id: 2, title: "menu.image", value: "image", icon: <FiImage size={20}/>},
    {id: 3, title: "menu.video", value: "video", icon: <FiFilm size={20}/>},
    {id: 4, title: "menu.voice", value: "voice", icon: <FiMusic size={20}/>},
    {id: 5, title: "menu.location", value: "location", icon: <FiMapPin size={20}/>},
];

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

    const {t} = useTranslation();
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 576px)');

    const [filter, setFilter] = useState("file");

    const _handleActiveFilter = (value) => setFilter(value);

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
                    onChange={(event, newValue) => _handleActiveFilter(newValue)}
                    variant={isMobile ? "scrollable" : "fullWidth"}
                    allowScrollButtonsMobile={isTablet}
                    sx={{width: "100%"}}
                >

                    {
                        filterList.map(filterItem =>
                            <Tab
                                key={filterItem.id}
                                label={t(filterItem.title)}
                                value={filterItem.value}
                            />
                        )
                    }

                </Tabs>

            </Box>

            <SimpleBar
                style={{
                    width: "100%",
                    height: isTablet ? "calc(100dvh - 160px)" : 480
                }}
            >

                <Grid
                    component="ul"
                    container
                    rowSpacing={2}
                    columnSpacing={isMobile ? 0 : 2}
                    sx={{width: "100%"}}
                >

                    {
                        logList.map(logItem => {
                            if (logItem.type === "image" && filter === "image") return <ImageLog key={logItem.id}
                                                                                                 log={logItem}/>;
                            if (logItem.type === "file" && filter === "file") return <FileLog key={logItem.id}
                                                                                              log={logItem}/>
                            if (logItem.type === "voice" && filter === "voice") return <VoiceLog key={logItem.id}
                                                                                                 log={logItem}/>
                            if (logItem.type === "video" && filter === "video") return <VideoLog key={logItem.id}
                                                                                                 log={logItem}/>
                            if (logItem.type === "location" && filter === "location") return <LocationLog
                                key={logItem.id} log={logItem}/>
                        })
                    }

                </Grid>

            </SimpleBar>

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
                gap={2}
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

export default HistoryModal;