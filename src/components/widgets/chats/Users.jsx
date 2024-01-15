// libraries
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Stack, Badge, Typography, useTheme} from "@mui/material";
import {FiUser} from "react-icons/fi";

// providers
import {SocketContext} from "providers/Socket";

// stores
import {hideModal} from "stores/slices/appSlice";
import {useAddChatMutation} from "stores/apis/chatApi";

const UserItem = ({userItem}) => {

    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const [addChat, addChatResponse] = useAddChatMutation();
    const {onlineUsers} = useSelector(state => state.chat);
    const {socket} = useContext(SocketContext);
    const theme = useTheme();
    const isActiveReceiver = Boolean(onlineUsers.find(user => user.userId === userItem?._id));

    useEffect(() => {

        if (addChatResponse.isSuccess) {
            dispatch(hideModal());
        }

        if (addChatResponse.status === "fulfilled" && addChatResponse?.data) {
            socket?.current?.emit("addChat", {
                userId: _id,
                chat: addChatResponse?.data,
                receiverIds: addChatResponse?.data?.participantIds.filter(user => user._id !== _id).map(item => item._id),
                socketId: socket?.current?.id
            });
        }

    }, [addChatResponse]);

    return (
        <Box
            component="li"
            sx={{
                width: "100%",
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                borderRadius: 1,
                padding: 1.5,
                cursor: "pointer",
                "&:last-of-type": {
                    borderBottom: "none"
                }
            }}
            onClick={() => addChat(userItem?._id)}
        >

            <Stack
                direction="row"
                gap={1}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    borderRadius: 1,
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
                        userItem?.avatar ? (
                            <LazyLoadImage
                                src={userItem?.avatar}
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
                        alignItems: "start"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        fontWeight='bold'
                        noWrap
                    >
                        {userItem?.userName}
                    </Typography>

                </Stack>

            </Stack>

        </Box>
    )
}

const Users = () => {

    const {users, filteredUsers} = useSelector(state => state.chat);

    return (
        <Stack
            component="ul"
            direction="column"
            className="custom-scrollbar"
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: 320,
                overflowY: "scroll"
            }}
        >

            {
                filteredUsers.length > 0 ? filteredUsers.map(userItem =>
                    <UserItem
                        key={userItem?._id}
                        userItem={userItem}
                    />
                ) : users.map(userItem =>
                    <UserItem
                        key={userItem?._id}
                        userItem={userItem}
                    />
                )
            }

        </Stack>
    )
}

export default Users;

