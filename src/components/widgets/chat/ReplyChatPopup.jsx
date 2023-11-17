// libraries
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {Stack, Typography, IconButton} from "@mui/material";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic, LuText} from "react-icons/lu";
import {FiPhone, FiVideo, FiX, FiCornerUpLeft} from "react-icons/fi";

// stores
import {hidePopup} from "stores/slices/app";

const replyMessageList = [
    {_id: "1", type: "text", content: "لورم ایپسوم"},
    {_id: "2", type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf"},
    {_id: "3", type: "image", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"},
    {_id: "4", type: "video", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"},
    {_id: "5", type: "voice", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3"},
    {_id: "6", type: "location", content: [35, 51]},
    {_id: "7", type: "log", status: "voiceCall"},
    {_id: "8", type: "log", status: "videoCall"},
];

const ReplyMessageItem = ({replyMessageItem}) => {

    const dispatch = useDispatch();
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

            <IconButton
                variant="text"
                color="error"
                onClick={() => dispatch(hidePopup())}
            >
                <FiX size={20}/>
            </IconButton>

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    color: "text.secondary"
                }}
            >

                {replyMessageItem.type === "text" && <LuText size={16}/>}
                {replyMessageItem.type === "image" && <LuImage size={16}/>}
                {replyMessageItem.type === "video" && <LuFilm size={16}/>}
                {replyMessageItem.type === "voice" && <LuMusic size={16}/>}
                {replyMessageItem.type === "file" && <LuFile size={16}/>}
                {replyMessageItem.type === "location" && <LuMapPin size={16}/>}
                {replyMessageItem.type === "log" && replyMessageItem.status === "voiceCall" && <FiPhone size={16}/>}
                {replyMessageItem.type === "log" && replyMessageItem.status === "videoCall" && <FiVideo size={16}/>}

                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{width: "100%"}}
                    className="text-truncate"
                >
                    {replyMessageItem.type === "text" && t("typography.text")}
                    {replyMessageItem.type === "image" && t("typography.image")}
                    {replyMessageItem.type === "video" && t("typography.video")}
                    {replyMessageItem.type === "voice" && t("typography.voice")}
                    {replyMessageItem.type === "file" && t("typography.file")}
                    {replyMessageItem.type === "location" && t("typography.location")}
                    {replyMessageItem.type === "log" && replyMessageItem.status === "voiceCall" && t("typography.voiceCall")}
                    {replyMessageItem.type === "log" && replyMessageItem.status === "videoCall" && t("typography.videoCall")}
                </Typography>

            </Stack>

            <FiCornerUpLeft size={20}/>

        </Stack>
    )
}

const ReplyChatPopup = () => {

    return (
        <Stack
            sx={{
                position: "absolute",
                bottom: 80,
                zIndex: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 60,
                bgcolor: "background.paper",
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "secondary.main",
                padding: 2
            }}
        >

            <ReplyMessageItem replyMessageItem={replyMessageList[0]}/>

        </Stack>
    )
}

export default ReplyChatPopup;

