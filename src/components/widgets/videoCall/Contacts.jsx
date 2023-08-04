// libraries
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";

// assets
import avatar from "@/assets/images/avatar.png";

// stores
import {setActiveChat} from "@/stores/slices/chat.js";
import {FiArrowDownLeft, FiArrowUpRight,} from "react-icons/fi";

const userList = [
    {_id: "1", title: "typography.incoming" ,time: 60 * 1000, status: "incoming"},
    {_id: "2", title: "typography.outgoing" ,time: 90 * 1000, status: "outgoing"},
    {_id: "3", title: "typography.declined" ,time: 0, status: "declined"},
    {_id: "4", title: "typography.cancelled" ,time: 0, status: "cancelled"},
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
                        width: "100%"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        fontWeight='bold'
                        noWrap
                        sx={{
                            width: "100%",
                            maxWidth: 120,
                            overflow: "hidden",
                        }}
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

                        {user.status === "incoming" && <FiArrowDownLeft size={16}/>}
                        {user.status === "outgoing" && <FiArrowUpRight size={16}/>}
                        {user.status === "declined" && <FiArrowDownLeft size={16}/>}
                        {user.status === "cancelled" && <FiArrowUpRight size={16}/>}

                        <Typography
                            variant="caption"
                            color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                            sx={{
                                width: "100%",
                                maxWidth: 100,
                                overflow: "hidden",
                            }}
                        >
                            {user.status === "incoming" && t("typography.incoming")}
                            {user.status === "outgoing" && t("typography.outgoing")}
                            {user.status === "declined" && t("typography.declined")}
                            {user.status === "cancelled" && t("typography.cancelled")}
                        </Typography>

                    </Stack>

                </Stack>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        width: 50,
                    }}
                >

                    <Typography
                        variant="caption"
                        color={activeChat?._id === user._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11
                    </Typography>

                    <Chip
                        variant="filled"
                        size="small"
                        color="success"
                        label="1"
                    />

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

