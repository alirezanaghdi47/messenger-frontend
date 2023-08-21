// libraries
import {useTranslation} from "react-i18next";
import {useMediaQuery} from "@react-hooks-library/core";
import {Modal, Stack, IconButton, Typography} from "@mui/material";
import {FiX} from "react-icons/fi";

// assets
import image from "../../../../assets/other/lorem-ipsum.jpg";
import file from "../../../../assets/other/lorem-ipsum.pdf";
import video from "../../../../assets/other/lorem-ipsum.mp4";
import voice from "../../../../assets/other/lorem-ipsum.mp3";

// components
import Filter from "./Filter";
import History from "./History";
import {useState} from "react";

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

            <Typography
                variant="subtitle2"
                color="textPrimary"
                fontWeight="bold"
            >
                {t("typography.chatHistory")}
            </Typography>

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

    const [filter, setFilter] = useState(0);

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

            <Filter
                value={filter}
                onChange={(event, newValue) => setFilter(newValue)}
            />

            <History list={imageList}/>

        </Stack>
    )
}

const HistoryModal = ({open, onClose}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <Modal
            open={open}
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
                    justifyContent: "center",
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

