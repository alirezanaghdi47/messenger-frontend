// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box , Stack, Typography , Badge} from "@mui/material";
import {FiUser} from "react-icons/fi";

const UserInfo = () => {

    const {activeChat , onlineUsers , isTypingUsers} = useSelector(state => state.chat);
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
                    activeChat.participantIds.find(item => item._id !== _id)?.avatar ? (
                        <LazyLoadImage
                            src={activeChat.participantIds.find(item => item._id !== _id)?.avatar}
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
                    {activeChat.participantIds.find(item => item._id !== _id)?.userName}
                </Typography>

                {
                    isTypingReceiver && (
                        <Typography
                            variant="caption"
                            color="textSecondary"
                            noWrap
                        >
                            {t("typography.isTyping")}
                        </Typography>
                    )
                }

            </Stack>

        </Stack>
    )
}

export default UserInfo;