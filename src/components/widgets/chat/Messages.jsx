// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import LazyLoad from 'react-lazy-load';
import {Box, Card, Chip, IconButton, Stack, Typography, useTheme} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";
import {FiPhone, FiVideo} from "react-icons/fi";
import {LuPlay} from "react-icons/lu";

// utils
import {fontSizeList} from "utils/constants";
import {convertByte, convertTimestamp} from "utils/functions";

// components
import {useContextMenu} from "components/hooks/useContextMenu";
import {useModal} from "components/hooks/useModal";
const ImagePreviewModal = Loadable(() => import("components/widgets/chat/ImagePreviewModal"));
const MusicPlayerModal = Loadable(() => import("components/widgets/chat/MusicPlayerModal"));
const VideoPlayerModal = Loadable(() => import("components/widgets/chat/VideoPlayerModal"));
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

                <LazyLoad
                    width={50}
                    height={50}
                    threshold={0.5}
                >
                    <img
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"
                        alt="image"
                        width={50}
                        height={50}
                        style={{borderRadius: 8}}
                    />
                </LazyLoad>

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
                        {convertByte(300000)}
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

    const theme = useTheme();

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();
    const {isOpenModal, _handleShowModal, _handleHideModal} = useModal();

    return (
        <>

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

                    <LazyLoad
                        width="100%"
                        height="100%"
                        threshold={0.5}
                    >
                        <img
                            src={message.content}
                            alt="image"
                            width="100%"
                            height="100%"
                            style={{
                                maxWidth: 300,
                                borderRadius: 8,
                                cursor: "pointer"
                            }}
                            onClick={_handleShowModal}
                        />
                    </LazyLoad>

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
                            label={convertByte(300000)}
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

            <ImagePreviewModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </>
    )
}

export const MusicMessage = ({message}) => {

    const {language} = useSelector(state => state.setting.appearance);
    const theme = useTheme();

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();
    const {isOpenModal, _handleShowModal, _handleHideModal} = useModal();

    return (
        <>

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
                        onClick={_handleShowModal}
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
                            00:10 / 00:00
                        </Typography>

                        <Typography
                            variant="caption"
                            color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        >
                            {convertByte(300000)}
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

            <MusicPlayerModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </>
    )
}

export const VideoMessage = ({message}) => {

    const theme = useTheme();

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();
    const {isOpenModal, _handleShowModal, _handleHideModal} = useModal();

    return (
        <>

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

                    <LazyLoad
                        width="100%"
                        height="100%"
                        threshold={0.5}
                    >
                        <img
                            src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"
                            alt="image"
                            width="100%"
                            height="100%"
                            style={{
                                maxWidth: 300,
                                borderRadius: 8,
                            }}
                        />
                    </LazyLoad>

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
                            label={convertByte(300000)}
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
                        onClick={_handleShowModal}
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

            <VideoPlayerModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </>
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
                        message.content.time > 0 && (
                            <Typography
                                variant="caption"
                                color={message.me ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                            >
                                {convertTimestamp(message.content.time)}
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

            <LazyLoad
                width="100%"
                height="100%"
                threshold={0.5}
            >
                <img
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"
                    alt="image"
                    width="100%"
                    height="100%"
                    style={{
                        maxWidth: 300,
                        borderRadius: 8,
                        cursor: "pointer"
                    }}
                    onClick={_handleShowDetail}
                />
            </LazyLoad>

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
