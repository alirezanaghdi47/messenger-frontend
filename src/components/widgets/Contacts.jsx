// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";
import {BiCheck, BiCheckDouble} from "react-icons/bi";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic} from "react-icons/lu";

// assets
import avatar from "@/assets/images/avatar.png";
import file from "@/assets/files/lorem-ipsum.pdf";
import image from "@/assets/images/lorem-ipsum.jpg";
import video from "@/assets/videos/lorem-ipsum.mp4";
import voice from "@/assets/voices/lorem-ipsum.mp3";

// stores
import {setActiveChat} from "@/stores/slices/chat.js";

const userList = [
    {_id: "1", type: "text", content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."},
    {_id: "2", type: "image", content: image},
    {_id: "3", type: "file", content: file},
    {_id: "4", type: "video", content: video},
    {_id: "5", type: "voice", content: voice},
    {_id: "6", type: "location", content: [35, 51]},
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
                    cursor: "pointer",
                    borderRadius: 1,
                    padding: 1.5,
                    textDecoration: 'none'
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

                        {user.type === "image" && <LuImage size={16}/>}
                        {user.type === "video" && <LuFilm size={16}/>}
                        {user.type === "voice" && <LuMusic size={16}/>}
                        {user.type === "file" && <LuFile size={16}/>}
                        {user.type === "location" && <LuMapPin size={16}/>}

                        {
                            user.type !== "text" && (
                                <Typography
                                    variant="caption"
                                    color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                                    sx={{
                                        width: "100%",
                                        overflow: "hidden",
                                    }}
                                >
                                    {user.type === "image" && t("typography.image")}
                                    {user.type === "video" && t("typography.video")}
                                    {user.type === "voice" && t("typography.voice")}
                                    {user.type === "file" && t("typography.file")}
                                    {user.type === "location" && t("typography.location")}
                                </Typography>
                            )
                        }

                        {
                            user.type === "text" && (
                                <Typography
                                    variant="caption"
                                    color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                                    className="text-truncate"
                                >
                                    {user.content}
                                </Typography>
                            )
                        }

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
                height: "calc(100vh - 150px)",
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

