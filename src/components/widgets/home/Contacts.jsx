// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";
import {BiCheck, BiCheckDouble} from "react-icons/bi";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic, LuText} from "react-icons/lu";
import {FiPhone, FiVideo} from "react-icons/fi";

// assets
import avatar from "@/assets/images/avatar.png";
import file from "@/assets/other/lorem-ipsum.pdf";
import image from "@/assets/other/lorem-ipsum.jpg";
import video from "@/assets/other/lorem-ipsum.mp4";
import voice from "@/assets/other/lorem-ipsum.mp3";

// stores
import {setActiveChat} from "@/stores/slices/chat.js";

const userList = [
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

const ContactItem = ({user}) => {

    const dispatch = useDispatch();
    const {activeChat} = useSelector(state => state.chat);
    const {t} = useTranslation();
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => dispatch(setActiveChat(user))}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    bgcolor: activeChat?._id === user._id && "primary.main",
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
                        color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
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
                            color: activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                        }}
                    >

                        {user.type === "text" && <LuText size={16}/>}
                        {user.type === "image" && <LuImage size={16}/>}
                        {user.type === "video" && <LuFilm size={16}/>}
                        {user.type === "voice" && <LuMusic size={16}/>}
                        {user.type === "file" && <LuFile size={16}/>}
                        {user.type === "location" && <LuMapPin size={16}/>}
                        {user.type === "log" && user.status === "voiceCall" && <FiPhone size={16}/>}
                        {user.type === "log" && user.status === "videoCall" && <FiVideo size={16}/>}

                        <Typography
                            variant="caption"
                            color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                            sx={{
                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            {user.type === "text" && t("typography.text")}
                            {user.type === "image" && t("typography.image")}
                            {user.type === "video" && t("typography.video")}
                            {user.type === "voice" && t("typography.voice")}
                            {user.type === "file" && t("typography.file")}
                            {user.type === "location" && t("typography.location")}
                            {user.type === "log" && user.status === "voiceCall" && t("typography.voiceCall")}
                            {user.type === "log" && user.status === "videoCall" && t("typography.videoCall")}
                        </Typography>

                    </Stack>

                    {/*<Typography*/}
                    {/*    variant="caption"*/}
                    {/*    color={activeChat?._id === profile._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}*/}
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
                        color: activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <Typography
                        variant="caption"
                        color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
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

const Contacts = () => {

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
                userList.map(userItem =>
                    <ContactItem
                        key={userItem._id}
                        user={userItem}
                    />
                )
            }

        </Stack>
    )
}

export default Contacts;

