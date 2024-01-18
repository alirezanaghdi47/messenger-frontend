// libraries
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {format} from "date-fns";
import {enUS, faIR} from "date-fns/locale";
import {Box, Card, Chip, CircularProgress, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";
import {FiPhone, FiVideo} from "react-icons/fi";
import {LuMapPin, LuPlay} from "react-icons/lu";

// hooks
import {useContextMenu} from "hooks/useContextMenu";

// utils
import {formattedByte, formattedMilisecond} from "utils/functions";

// stores
import {showModal} from "stores/slices/appSlice";

const MessageDropdownMenu = Loadable(() => import("components/widgets/chat/MessageDropdownMenu"));

export const TextMessage = ({message}) => {

    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message?.userId?._id === _id ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={message}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

            {/*<Stack*/}
            {/*    direction="row"*/}
            {/*    gap={0.5}*/}
            {/*    sx={{*/}
            {/*        display: "flex",*/}
            {/*        justifyContent: "start",*/}
            {/*        alignItems: "center",*/}
            {/*        width: "100%",*/}
            {/*        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"*/}
            {/*    }}*/}
            {/*>*/}

            {/*    <FiCornerUpRight size={20}/>*/}

            {/*    <Typography*/}
            {/*        variant="body2"*/}
            {/*        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}*/}
            {/*        fontWeight="bold"*/}
            {/*    >*/}
            {/*        {t("typography.forwarded")} &nbsp;     علیرضا نقدی*/}
            {/*    </Typography>*/}

            {/*</Stack>*/}

            <Typography
                variant="body2"
                color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                lineHeight={2}
            >
                {message?.content}
            </Typography>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Typography
                    variant="caption"
                    color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {
                        format(
                            new Date(message?.createdAt),
                            language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

                <BiCheckDouble size={20}/>

            </Stack>

        </Card>
    )
}

export const FileMessage = ({message}) => {

    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message?.userId?._id === _id ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={message}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Stack
                    direction="column"
                    gap={0.5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.primary"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        lineHeight={2}
                    >
                        {message?.name}
                    </Typography>

                    <Typography
                        variant="caption"
                        color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {formattedByte(message?.size)}
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Typography
                    variant="caption"
                    color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {
                        format(
                            new Date(message?.createdAt),
                            language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

                <BiCheckDouble size={20}/>

            </Stack>

        </Card>
    )
}

export const ImageMessage = ({message}) => {

    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                position: "relative",
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message?.userId?._id === _id ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={message}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                }}
            >

                <Box
                    style={{cursor: "pointer"}}
                    onClick={() => dispatch(showModal({type: "imagePreview", data: message}))}
                >

                    <LazyLoadImage
                        src={message?.content}
                        alt={message?.name}
                        visibleByDefault
                        effect="blur"
                        width={250}
                        style={{borderRadius: 8}}
                    />

                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <Chip
                        variant="caption"
                        color={message?.userId?._id === _id ? "primary" : "secondary"}
                        size="small"
                        label={formattedByte(message?.size)}
                    />

                </Box>

            </Box>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Typography
                    variant="caption"
                    color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {
                        format(
                            new Date(message?.createdAt),
                            language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

                <BiCheckDouble size={20}/>

            </Stack>

        </Card>
    )
}

export const MusicMessage = ({message}) => {

    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message?.userId?._id === _id ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={message}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <IconButton
                    variant="contained"
                    color={message?.userId?._id === _id ? "primary" : "secondary"}
                    size="large"
                    sx={{order: language === "fa" ? 2 : 1}}
                    onClick={() => dispatch(showModal({type: "musicPlayer", data: message}))}
                >
                    <LuPlay size={20}/>
                </IconButton>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        order: language === "fa" ? 1 : 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: language === "fa" ? "end" : "start",
                        width: 150,
                    }}
                >

                    <Typography
                        variant="caption"
                        color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {formattedMilisecond(message?.duration * 1000)}
                    </Typography>

                    <Typography
                        variant="caption"
                        color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {formattedByte(message?.size)}
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Typography
                    variant="caption"
                    color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {
                        format(
                            new Date(message?.createdAt),
                            language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

                <BiCheckDouble size={20}/>

            </Stack>

        </Card>
    )
}

export const VideoMessage = ({message}) => {

    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message?.userId?._id === _id ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={message}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                }}
            >

                <LazyLoadImage
                    src={message?.thumbnail}
                    alt={message?.name}
                    visibleByDefault
                    effect="blur"
                    width={250}
                    style={{
                        aspectRatio: 3 / 2,
                        borderRadius: 8,
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <Chip
                        variant="caption"
                        color={message?.userId?._id === _id ? "primary" : "secondary"}
                        label={formattedMilisecond(message?.duration * 1000)}
                        size="small"
                    />

                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <Chip
                        variant="caption"
                        color={message?.userId?._id === _id ? "primary" : "secondary"}
                        size="small"
                        label={formattedByte(message?.size)}
                    />

                </Box>

                <IconButton
                    variant="contained"
                    color={message?.userId?._id === _id ? "primary" : "secondary"}
                    size="large"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50% , -50%)",
                    }}
                    onClick={() => dispatch(showModal({type: "videoPlayer", data: message}))}
                >
                    <LuPlay size={20}/>
                </IconButton>

            </Box>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Typography
                    variant="caption"
                    color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {
                        format(
                            new Date(message?.createdAt),
                            language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

                <BiCheckDouble size={20}/>

            </Stack>

        </Card>
    )
}

export const LogMessage = ({message}) => {

    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const {t} = useTranslation();
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={message}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

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
                        color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary",
                        borderRadius: 1
                    }}
                >

                    {(message?.status === "voiceCall") && <FiPhone size={20}/>}
                    {(message?.status === "videoCall") && <FiVideo size={20}/>}

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
                        variant="body2"
                        color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {t(`typography.${message?.status}`)}
                    </Typography>

                    {
                        message?.time > 0 ? (
                            <Typography
                                variant="caption"
                                color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            >
                                {formattedMilisecond(message?.time)}
                            </Typography>
                        ) : (
                            <Typography
                                variant="caption"
                                color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            >
                                {t("typography.rejected")}
                            </Typography>
                        )
                    }

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Typography
                    variant="caption"
                    color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {
                        format(
                            new Date(message?.createdAt),
                            language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

                <BiCheckDouble size={20}/>

            </Stack>

        </Card>
    )
}

export const LocationMessage = ({message}) => {

    const theme = useTheme();
    const {_id} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message?.userId?._id === _id ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={message}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

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
                        color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary",
                        borderRadius: 1
                    }}
                >

                    <LuMapPin size={20}/>

                </Box>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        cursor: "pointer"
                    }}
                >

                    <Typography
                        component={Link}
                        to={message?.content}
                        variant="body2"
                        color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        موقعیت من
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Typography
                    variant="caption"
                    color={message?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    {
                        format(
                            new Date(message?.createdAt),
                            language === "en" ? "yyyy/MM/dd , hh:mm:dd" : "hh:mm:dd , yyyy/MM/dd",
                            {locale: language === "en" ? enUS : faIR, addSuffix: true}
                        )
                    }
                </Typography>

                <BiCheckDouble size={20}/>

            </Stack>

        </Card>
    )
}

export const QueueMessage = () => {

    const {_id} = useSelector(state => state.setting.profile);
    const {queueMessage} = useSelector(state => state.chat);
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Card
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: queueMessage?.userId?._id === _id ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
                data={queueMessage}
                contextMenu={contextMenu}
                isOpen={contextMenu !== null}
                onClose={_handleHideContextMenu}
            />

            <Stack
                direction="row"
                gap={2}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                    color: queueMessage?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: queueMessage?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.primary"
                    }}
                >

                    <Stack
                        direction="column"
                        gap={2}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "start",
                        }}
                    >

                        <Typography
                            variant="caption"
                            color={queueMessage?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        >
                            {queueMessage?.name}
                        </Typography>

                        <Typography
                            variant="caption"
                            color={queueMessage?.userId?._id === _id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        >
                            {formattedByte(queueMessage?.progress * queueMessage?.size / 100)} / {formattedByte(queueMessage?.size)}
                        </Typography>

                    </Stack>

                    <CircularProgressWithLabel value={queueMessage?.progress}/>

                </Stack>

            </Stack>

        </Card>
    )
}

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{position: 'relative', display: 'inline-flex'}}>
            <CircularProgress
                variant="determinate"
                {...props}
                sx={{color: (theme) => theme.palette.secondary.main}}
                size={48}
                thickness={4}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="light.main">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}