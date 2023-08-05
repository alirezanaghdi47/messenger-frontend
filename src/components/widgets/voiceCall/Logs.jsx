// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Card, getContrastRatio, Stack, Typography, useTheme} from "@mui/material";
import {FiArrowDownLeft, FiArrowUpRight} from "react-icons/fi";

// assets
import avatar from "@/assets/images/avatar.png";

// utils
import {fontSizeList} from "@/utils/constants.js";
import {convertTimestamp} from "@/utils/functions.js";
import {BiCheckDouble} from "react-icons/bi";

const logList = [
    {id: 1, title: "typography.incoming", time: 60 * 1000, me: true, status: "incoming"},
    {id: 2, title: "typography.outgoing", time: 90 * 1000, me: false, status: "outgoing"},
    {id: 3, title: "typography.declined", time: 0, me: false, status: "declined"},
    {id: 4, title: "typography.cancelled", time: 0, me: true, status: "cancelled"},
];

const LogItem = ({chat}) => {

    const theme = useTheme();
    const {fontSize} = useSelector(state => state.user.setting);
    const {t} = useTranslation();

    return (
        <Stack
            component="li"
            direction="row"
            gap={1}
            sx={{
                display: "flex",
                justifyContent: chat.me ? "start" : "end",
                alignItems: "end",
                width: '100%',
            }}
        >

            <LazyLoadImage
                src={avatar}
                alt="avatar"
                width={30}
                height={30}
                style={{
                    order: chat.me ? 1 : 2,
                    borderRadius: "50%",
                }}
            />

            <Stack
                direction="column"
                gap={1}
                sx={{
                    order: chat.me ? 2 : 1,
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "max-content",
                }}
            >

                <Card
                    sx={{
                        display: "flex",
                        gap: 2,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        bgcolor: chat.me ? "primary.main" : "background.paper",
                        padding: 1,
                    }}
                >

                    <Stack
                        direction="row"
                        gap={1}
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center"
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 32,
                                height: 32,
                                bgcolor: chat.status === "incoming" || chat.status === "outgoing" ? "success.main" : "error.main",
                                color: "common.black",
                                borderRadius: 1
                            }}
                        >

                            {(chat.status === "incoming" || chat.status === "declined") && <FiArrowDownLeft size={20}/>}
                            {(chat.status === "outgoing" || chat.status === "cancelled") && <FiArrowUpRight size={20}/>}

                        </Box>

                        <Stack
                            direction="column"
                            gap={1}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                            }}
                        >

                            <Typography
                                variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                                color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            >
                                {t(chat.title)}
                            </Typography>

                            {
                                chat.time > 0 && (
                                    <Typography
                                        variant="caption"
                                        color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                                    >
                                        {convertTimestamp(chat.time)}
                                    </Typography>
                                )
                            }

                        </Stack>

                    </Stack>

                    <Stack
                        direction="row"
                        gap={0.5}
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            width: "100%",
                            color: chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                        }}
                    >

                        <BiCheckDouble size={20}/>

                        <Typography
                            variant="caption"
                            color={chat.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                        >
                            11:11 | 1400/1/1
                        </Typography>

                    </Stack>

                </Card>

            </Stack>

        </Stack>
    )
}

const Logs = () => {

    return (
        <Stack
            component="ul"
            direction="column"
            gap={2}
            sx={{
                position: "relative",
                zIndex: 20,
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                height: "100%",
                padding: 2,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            {
                logList.map(logItem =>
                    <LogItem
                        key={logItem.id}
                        chat={logItem}
                    />
                )
            }

        </Stack>
    )
}

export default Logs;

