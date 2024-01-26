// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Stack, Typography} from "@mui/material";
import {FiUser} from "react-icons/fi";

const UserChat = () => {

    const {activeChat, onlineUsers, isTypingUsers} = useSelector(state => state.chat);
    const {_id} = useSelector(state => state.setting.profile);
    const {t} = useTranslation();
    const isActiveReceiver = Boolean(onlineUsers.find(user => user.userId === activeChat?.participantIds.find(user => user._id !== _id)?._id));
    const isTypingReceiver = Boolean(isTypingUsers.find(user => user.userId === activeChat?.participantIds.find(user => user._id !== _id)?._id));

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "max-content",
            }}
        >

            {
                activeChat?.participantIds.find(item => item._id !== _id)?.avatar ? (
                    <LazyLoadImage
                        src={activeChat?.participantIds.find(item => item._id !== _id)?.avatar}
                        alt="avatar"
                        visibleByDefault
                        effect="blur"
                        width={40}
                        height={40}
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
                    alignItems: "start"
                }}
            >

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    fontWeight='bold'
                    noWrap
                >
                    {activeChat?.participantIds.find(item => item._id !== _id)?.userName}
                </Typography>

                {
                    isTypingReceiver ? (
                        <Typography
                            variant="caption"
                            color="textSecondary"
                            noWrap
                        >
                            {t("typography.isTyping")}
                        </Typography>
                    ) : (
                        <Typography
                            variant="caption"
                            color={isActiveReceiver ? "success.main" : "textSecondary"}
                            fontWeight='bold'
                            noWrap
                        >
                            {isActiveReceiver ? t("typography.isOnline") : t("typography.isOffline")}
                        </Typography>
                    )
                }

            </Stack>

        </Stack>
    )
}

const GroupChat = () => {

    const {activeChat} = useSelector(state => state.chat);
    const {t} = useTranslation();

    return (
        <Stack
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "max-content",
            }}
        >

            {
                activeChat?.groupId?.avatar ? (
                    <LazyLoadImage
                        src={activeChat?.groupId?.avatar}
                        alt="avatar"
                        visibleByDefault
                        effect="blur"
                        width={40}
                        height={40}
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
                    alignItems: "start"
                }}
            >

                <Typography
                    variant="subtitle2"
                    color="textPrimary"
                    fontWeight='bold'
                    noWrap
                >
                    {activeChat?.groupId?.name}
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    noWrap
                >
                    {activeChat?.participantIds?.length}
                    &nbsp;
                    {t("typography.member")}
                </Typography>

            </Stack>

        </Stack>
    )
}

const Info = () => {
    const {activeChat} = useSelector(state => state.chat);
    return activeChat?.groupId ? <GroupChat/> : <UserChat/>
}

export default Info;