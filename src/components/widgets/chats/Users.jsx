// libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {formatDistanceToNow} from "date-fns";
import {enUS, faIR} from "date-fns/locale";
import {Box, Stack , Badge, Typography, useMediaQuery, useTheme} from "@mui/material";

// stores
import {hideModal} from "stores/slices/appSlice";
import {useAddChatMutation} from "stores/apis/chatApi";

const UserItem = ({userItem}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {language} = useSelector(state => state.setting.appearance);
    const [addChat, response] = useAddChatMutation();
    const {t} = useTranslation();
    const theme = useTheme();

    useEffect(() => {

        if (response?.data?._id) {
            dispatch(hideModal());
            navigate(`/chat/${response?.data?._id}`);
        }

    }, [response]);

    return (
        <Box
            component="li"
            sx={{
                width: "100%",
                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                paddingY: 2,
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
                        src={userItem?.avatar}
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

                    <Typography
                        variant="caption"
                        color="textSecondary"
                        noWrap
                    >
                        {t("typography.lastSeen")}
                        &nbsp;
                        {
                            formatDistanceToNow(
                                userItem?.lastSeen,
                                {locale: language === "en" ? enUS : faIR, addSuffix: true}
                            )
                        }
                    </Typography>

                </Stack>

            </Stack>

        </Box>
    )
}

const Users = ({users}) => {

    const isTablet = useMediaQuery('(max-width: 768px)');

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
                height: isTablet ? "calc(100dvh - 200px)" : 480,
                overflowY: "scroll"
            }}
        >

            {
                users.map(userItem =>
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

