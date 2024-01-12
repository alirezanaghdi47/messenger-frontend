// libraries
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Badge, Box, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";
import {FiUser} from "react-icons/fi";

const ChatItem = ({chatItem}) => {

    const navigate = useNavigate();
    const params = useParams();
    const {_id} = useSelector(state => state.setting.profile);
    const {onlineUsers} = useSelector(state => state.chat);
    const theme = useTheme();
    const isActiveReceiver = Boolean(onlineUsers.find(user => user.userId === chatItem?.participantIds.find(user => user._id !== _id)?._id));

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => navigate(`/chat/${chatItem._id}`)}
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

                <Badge
                    color={isActiveReceiver ? "success" : "secondary"}
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >

                    {
                        chatItem?.participantIds.find(item => item._id !== _id)?.avatar ? (
                            <LazyLoadImage
                                src={chatItem?.participantIds.find(item => item._id !== _id)?.avatar}
                                alt="avatar"
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

                </Badge>

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

