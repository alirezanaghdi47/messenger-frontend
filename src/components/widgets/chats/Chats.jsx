// libraries
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Virtuoso} from 'react-virtuoso';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Badge, Box, Stack, Typography, useTheme} from "@mui/material";
import {FiUser} from "react-icons/fi";

const UserChat = ({chatItem}) => {

    const params = useParams();
    const {_id} = useSelector(state => state.setting.profile);
    const {onlineUsers} = useSelector(state => state.chat);
    const theme = useTheme();
    const isActiveReceiver = Boolean(onlineUsers.find(user => user.userId === chatItem?.participantIds.find(user => user._id !== _id)?._id));

    return (
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
                    width: "calc(100% - 64px)",
                    height: 40,
                }}
            >

                <Typography
                    variant="subtitle2"
                    color={params.chatId === chatItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    fontWeight='bold'
                    className="text-truncate"
                    width="100%"
                >
                    {chatItem?.participantIds.find(item => item._id !== _id)?.userName}
                </Typography>

            </Stack>

        </Stack>
    )
}

const GroupChat = ({chatItem}) => {

    const params = useParams();
    const theme = useTheme();

    return (
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

            {
                chatItem?.groupId?.avatar ? (
                    <LazyLoadImage
                        src={chatItem?.groupId?.avatar}
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
                    {chatItem?.groupId?.name}
                </Typography>

            </Stack>

        </Stack>
    )
}

const ChatItem = ({chatItem}) => {

    const navigate = useNavigate();

    return (
        <Box
            component="li"
            sx={{width: "100%"}}
            onClick={() => navigate(`/chat/${chatItem._id}`)}
        >
            {
                chatItem?.groupId ? (
                    <GroupChat chatItem={chatItem}/>
                ) : (
                    <UserChat chatItem={chatItem}/>
                )
            }
        </Box>
    )
}

const Chats = () => {

    const {chats, filteredChats} = useSelector(state => state.chat);

    return (
        <Virtuoso
            totalCount={Math.max(filteredChats.length, chats.length)}
            data={filteredChats.length > 0 ? filteredChats : chats}
            itemContent={(index , chatItem) =>
                <ChatItem
                    key={chatItem?._id}
                    chatItem={chatItem}
                />
            }
            style={{
                width: "100%",
                height: "calc(100dvh - 140px)",
            }}
            className="custom-scrollbar"
        />
    )
}

export default Chats;

