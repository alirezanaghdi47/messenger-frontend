// libraries
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";
import {BiCheck, BiCheckDouble} from "react-icons/bi";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic, LuText} from "react-icons/lu";
import {FiPhone, FiVideo} from "react-icons/fi";

// assets
import avatar from "../../../assets/images/avatar.png";
import file from "../../../assets/other/lorem-ipsum.pdf";
import image from "../../../assets/other/lorem-ipsum.jpg";
import video from "../../../assets/other/lorem-ipsum.mp4";
import voice from "../../../assets/other/lorem-ipsum.mp3";

const contactList = [
    {_id: "1", type: "text", content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود."},
    {_id: "2", type: "image", content: image},
    {_id: "3", type: "file", content: file},
    {_id: "4", type: "video", content: video},
    {_id: "5", type: "voice", content: voice},
    {_id: "6", type: "location", content: [35, 51]},
    {_id: "7", type: "log", status: "voiceCall"},
    {_id: "8", type: "log", status: "voiceCall"},
    {_id: "9", type: "log", status: "videoCall"},
    {_id: "10", type: "log", status: "videoCall"},
];

const ContactItem = ({item}) => {

    const navigate = useNavigate();
    const params = useParams();
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => navigate(`/${item._id}`)}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    bgcolor: params.chatId === item._id && "primary.main",
                    width: "100%",
                    borderRadius: 1,
                    padding: 1.5,
                    textDecoration: 'none',
                    cursor: "pointer",
                }}
            >

                <Badge
                    color="success"
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >

                    <LazyLoadImage
                        src={avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                        style={{borderRadius: "50%"}}
                    />

                </Badge>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "calc(100% - 100px)",
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={params.chatId === item._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        fontWeight='bold'
                        className="text-truncate"
                    >
                        علیرضا نقدی
                    </Typography>

                    <Stack
                        direction="row"
                        gap={1}
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            width: "100%",
                            color: params.chatId === item._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                        }}
                    >

                        {item.type === "text" && <LuText size={16}/>}
                        {item.type === "image" && <LuImage size={16}/>}
                        {item.type === "video" && <LuFilm size={16}/>}
                        {item.type === "voice" && <LuMusic size={16}/>}
                        {item.type === "file" && <LuFile size={16}/>}
                        {item.type === "location" && <LuMapPin size={16}/>}
                        {item.type === "log" && item.status === "voiceCall" && <FiPhone size={16}/>}
                        {item.type === "log" && item.status === "videoCall" && <FiVideo size={16}/>}

                        <Typography
                            variant="caption"
                            color={params.chatId === item._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                            sx={{
                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            {item.type === "text" && t("typography.text")}
                            {item.type === "image" && t("typography.image")}
                            {item.type === "video" && t("typography.video")}
                            {item.type === "voice" && t("typography.voice")}
                            {item.type === "file" && t("typography.file")}
                            {item.type === "location" && t("typography.location")}
                            {item.type === "log" && item.status === "voiceCall" && t("typography.voiceCall")}
                            {item.type === "log" && item.status === "videoCall" && t("typography.videoCall")}
                        </Typography>

                    </Stack>

                    {/*<Typography*/}
                    {/*    variant="caption"*/}
                    {/*    color={params.chatId === item._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}*/}
                    {/*>*/}
                    {/*    ... {t("typography.isTyping")}*/}
                    {/*</Typography>*/}

                </Stack>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        width: 50,
                        color: params.chatId === item._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <Typography
                        variant="caption"
                        color={params.chatId === item._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11
                    </Typography>

                    <BiCheckDouble size={20}/>

                    {/*<Chip*/}
                    {/*    variant="filled"*/}
                    {/*    size="small"*/}
                    {/*    color="success"*/}
                    {/*    label="1"*/}
                    {/*/>*/}

                </Stack>

            </Stack>

        </Box>
    )
}

const ContactList = ({list}) => {

    return (
        <Stack
            component="ul"
            direction="column"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "100%",
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                list.map(item =>
                    <ContactItem
                        key={item._id}
                        item={item}
                    />
                )
            }

        </Stack>
    )
}

const Contacts = () => {

    return (
        <ContactList list={contactList}/>
    )
}

export default Contacts;

