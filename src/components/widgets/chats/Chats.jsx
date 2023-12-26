// libraries
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {formatDistanceToNow} from "date-fns";
import {enUS, faIR} from "date-fns/locale";
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";
import {BiCheck, BiCheckDouble} from "react-icons/bi";

const ChatItem = ({chatItem}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => location.pathname === `/chat/${chatItem._id}` ? navigate("/chat") : navigate(`/chat/${chatItem._id}`)}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    bgcolor: params.chatId === chatItem._id && "primary.main",
                    width: "100%",
                    borderRadius: 1,
                    padding: 1.5,
                    textDecoration: 'none',
                    cursor: "pointer",
                }}
            >

                {/*<Badge*/}
                {/*    color="success"*/}
                {/*    variant="dot"*/}
                {/*    overlap="circular"*/}
                {/*    anchorOrigin={{*/}
                {/*        vertical: 'bottom',*/}
                {/*        horizontal: 'right',*/}
                {/*    }}*/}
                {/*>*/}

                <LazyLoadImage
                    src={chatItem?.participantIds.find(item => item._id !== _id)?.avatar}
                    alt="avatar"
                    visibleByDefault
                    width={40}
                    height={40}
                    effect='blur'
                    style={{borderRadius: "50%"}}
                />

                {/*</Badge>*/}

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "calc(100% - 100px)",
                        height: 40,
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        fontWeight='bold'
                        className="text-truncate"
                    >
                        {chatItem?.participantIds.find(item => item._id !== _id)?.userName}
                    </Typography>

                    <Typography
                        variant="caption"
                        color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        {
                            formatDistanceToNow(
                                chatItem.participantIds.find(item => item._id !== _id)?.lastSeen,
                                {locale: language === "en" ? enUS : faIR, addSuffix: true}
                            )
                        }
                    </Typography>

                    {/*<Typography*/}
                    {/*    variant="caption"*/}
                    {/*    color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}*/}
                    {/*>*/}
                    {/*    ... {t("typography.isTyping")}*/}
                    {/*</Typography>*/}

                </Stack>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "end",
                        width: 60,
                        height: 40,
                        color: params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    {/*<Chip*/}
                    {/*    variant="filled"*/}
                    {/*    size="small"*/}
                    {/*    color="success"*/}
                    {/*    label="1"*/}
                    {/*/>*/}

                    <BiCheckDouble size={20}/>

                </Stack>

            </Stack>

        </Box>
    )
}

const Chats = () => {

    const {chats} = useSelector(state => state.chat);

    return (
        <Stack
            component="ul"
            direction="column"
            className="remove-scrollbar"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "calc(100dvh - 140px)",
                overflowY: "scroll"
            }}
        >

            {
                chats.map(chatItem =>
                    <ChatItem
                        key={chatItem?._id}
                        chatItem={chatItem}
                    />
                )
            }

        </Stack>
    )
}

export default Chats;

