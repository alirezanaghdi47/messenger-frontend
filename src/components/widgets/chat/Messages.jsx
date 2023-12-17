// libraries
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Box, Card, Chip, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";
import {FiPhone, FiVideo} from "react-icons/fi";
import {LuMapPin, LuPlay} from "react-icons/lu";

// utils
import {fontSizeList} from "utils/constants";
import {formattedByte, formattedMilisecond} from "utils/functions";

// hooks
import {useContextMenu} from "hooks/useContextMenu";

// stores
import {showModal} from "stores/slices/app";

const MessageDropdownMenu = Loadable(() => import("components/widgets/chat/MessageDropdownMenu"));

export const TextMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
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
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
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
                variant={fontSizeList.find(fontSizeItem => fontSizeItem.value === fontSize).size}
                color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                lineHeight={2}
            >
                {message.content}
            </Typography>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    direction: "rtl",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

export const FileMessage = ({message}) => {

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
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
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
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <LazyLoadImage
                    src="/images/placeholder.jpg"
                    alt="image"
                    visibleByDefault
                    effect="blur"
                    width={50}
                    height={50}
                    style={{borderRadius: 8}}
                />

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.primary"
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        نام فایل
                    </Typography>

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {formattedByte(300000)}
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    direction: "rtl",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

export const ImageMessage = ({message}) => {

    const dispatch = useDispatch();
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
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
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
                    onClick={() => dispatch(showModal({type: "imagePreview"}))}
                >

                    <LazyLoadImage
                        src={message.content}
                        alt="image"
                        visibleByDefault
                        effect="blur"
                        width={250}
                        style={{
                            aspectRatio: 3 / 2,
                            borderRadius: 8,
                        }}
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
                        color={message.me ? "primary" : "secondary"}
                        size="small"
                        label={formattedByte(300000)}
                    />

                </Box>

            </Box>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    direction: "rtl",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

export const MusicMessage = ({message}) => {

    const dispatch = useDispatch();
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
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
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
                    color={message.me ? "primary" : "secondary"}
                    size="large"
                    sx={{order: language === "fa" ? 2 : 1}}
                    onClick={() => dispatch(showModal({type: "musicPlayer"}))}
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
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        00:10
                    </Typography>

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {formattedByte(300000)}
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    direction: "rtl",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

export const VideoMessage = ({message}) => {

    const dispatch = useDispatch();
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
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
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
                    src="/images/desktop-2.jpg"
                    alt="image"
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
                        color={message.me ? "primary" : "secondary"}
                        label="11:11"
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
                        color={message.me ? "primary" : "secondary"}
                        size="small"
                        label={formattedByte(300000)}
                    />

                </Box>

                <IconButton
                    variant="contained"
                    color={message.me ? "primary" : "secondary"}
                    size="large"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50% , -50%)",
                    }}
                    onClick={() => dispatch(showModal({type: "videoPlayer"}))}
                >
                    <LuPlay size={20}/>
                </IconButton>

            </Box>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    direction: "rtl",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

export const LogMessage = ({message}) => {

    const {fontSize} = useSelector(state => state.setting.appearance);
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
                        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary",
                        borderRadius: 1
                    }}
                >

                    {(message.content.status === "voiceCall") && <FiPhone size={20}/>}
                    {(message.content.status === "videoCall") && <FiVideo size={20}/>}

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
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        {t(`typography.${message.content.status}`)}
                    </Typography>

                    {
                        message.content.time > 0 ? (
                            <Typography
                                variant="caption"
                                color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            >
                                {formattedMilisecond(message.content.time)}
                            </Typography>
                        ) : (
                            <Typography
                                variant="caption"
                                color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            >
                                {t("typography.rejected")}
                            </Typography>
                        )
                    }

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    direction: "rtl",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}

export const LocationMessage = ({message}) => {

    const theme = useTheme();
    const {language} = useSelector(state => state.setting.appearance);
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    const _handleShowDetail = () => {
        window.location.href = `https://www.google.com/maps/search/${message.content[0]},${message.content[1]}`;
    }

    return (
        <Card
            sx={{
                display: "flex",
                gap: 1,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "start",
                bgcolor: message.me ? "primary.light" : "background.default",
                padding: 1.5,
            }}
            elevation={0}
            onContextMenu={_handleShowContextMenu}
        >

            <MessageDropdownMenu
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
                        color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary",
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
                    onClick={_handleShowDetail}
                >

                    <Typography
                        variant="body2"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                    >
                        iran , tehran
                    </Typography>

                    <Typography
                        variant="caption"
                        color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        sx={{
                            direction: language === "fa" ? "rtl" : "ltr"
                        }}
                    >
                        35.9624 , 53.1234
                    </Typography>

                </Stack>

            </Stack>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    direction: "rtl",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: "100%",
                    color: message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                }}
            >

                <BiCheckDouble size={20}/>

                <Typography
                    variant="caption"
                    color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                >
                    11:11 | 1400/1/1
                </Typography>

            </Stack>

        </Card>
    )
}
