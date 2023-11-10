// libraries
import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Loadable from '@loadable/component';
import {AsyncImage} from "loadable-image";
import {VariableSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {Badge, Box, Chip, Stack, Typography, useTheme} from "@mui/material";
import {BiCheck, BiCheckDouble} from "react-icons/bi";
import {LuFile, LuFilm, LuImage, LuMapPin, LuMusic, LuText} from "react-icons/lu";
import {FiPhone, FiVideo} from "react-icons/fi";

// hooks
import {useContextMenu} from "hooks/useContextMenu";

// stores
import {setPage} from "stores/slices/app";

const ConversationDropdownMenu = Loadable(() => import("components/widgets/chats/ConversationDropdownMenu"));

const conversationList = [
    {
        _id: "1",
        type: "text",
        content: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی گفته می‌شود."
    },
    {_id: "2", type: "file", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.pdf"},
    {_id: "3", type: "image", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"},
    {_id: "4", type: "video", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.3gp"},
    {_id: "5", type: "voice", content: "https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.mp3"},
    {_id: "6", type: "location", content: [35, 51]},
    {_id: "7", type: "log", status: "voiceCall"},
    {_id: "8", type: "log", status: "videoCall"},
];

const ConversationItem = ({conversationItem, index, setSize}) => {

    const dispatch = useDispatch();
    const {page} = useSelector(state => state.app);
    const rowRef = useRef();
    const {t} = useTranslation();
    const theme = useTheme();
    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    useEffect(() => {
        setSize(index, rowRef.current.getBoundingClientRect().height);
    }, [setSize, index]);

    return (
        <Box
            ref={rowRef}
            component="li"
            sx={{width: "100%"}}
            onClick={() => dispatch(setPage({active: "chat" , data: conversationItem._id}))}
            onContextMenu={_handleShowContextMenu}
        >

            <ConversationDropdownMenu
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
                    alignItems: "center",
                    bgcolor: page.data === conversationItem._id && "primary.main",
                    width: "100%",
                    borderRadius: 1,
                    padding: 1.5,
                    textDecoration: 'none',
                    cursor: "pointer",
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

                    <AsyncImage
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/avatar.png"
                        alt="avatar"
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                        }}
                        loader={<Box sx={{ bgcolor: "ternary.main" }}/>}
                    />

                </Badge>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "calc(100% - 100px)",
                    }}
                >

                    <Typography
                        variant="subtitle2"
                        color={page.data === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textPrimary"}
                        fontWeight='bold'
                        className="text-truncate"
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
                            color: page.data === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                        }}
                    >

                        {conversationItem.type === "text" && <LuText size={16}/>}
                        {conversationItem.type === "image" && <LuImage size={16}/>}
                        {conversationItem.type === "video" && <LuFilm size={16}/>}
                        {conversationItem.type === "voice" && <LuMusic size={16}/>}
                        {conversationItem.type === "file" && <LuFile size={16}/>}
                        {conversationItem.type === "location" && <LuMapPin size={16}/>}
                        {conversationItem.type === "log" && conversationItem.status === "voiceCall" &&
                            <FiPhone size={16}/>}
                        {conversationItem.type === "log" && conversationItem.status === "videoCall" &&
                            <FiVideo size={16}/>}

                        <Typography
                            variant="caption"
                            color={page.data === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                            sx={{
                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            {conversationItem.type === "text" && t("typography.text")}
                            {conversationItem.type === "image" && t("typography.image")}
                            {conversationItem.type === "video" && t("typography.video")}
                            {conversationItem.type === "voice" && t("typography.voice")}
                            {conversationItem.type === "file" && t("typography.file")}
                            {conversationItem.type === "location" && t("typography.location")}
                            {conversationItem.type === "log" && conversationItem.status === "voiceCall" && t("typography.voiceCall")}
                            {conversationItem.type === "log" && conversationItem.status === "videoCall" && t("typography.videoCall")}
                        </Typography>

                    </Stack>

                    {/*<Typography*/}
                    {/*    variant="caption"*/}
                    {/*    color={params.chatId === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}*/}
                    {/*>*/}
                    {/*    ... {t("typography.isTyping")}*/}
                    {/*</Typography>*/}

                </Stack>

                <Stack
                    direction="column"
                    gap={1}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        width: 50,
                        color: page.data === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "text.secondary"
                    }}
                >

                    <Typography
                        variant="caption"
                        color={page.data === conversationItem._id ? theme.palette.getContrastText(theme.palette.primary.main) : "textSecondary"}
                    >
                        11:11
                    </Typography>

                    <BiCheckDouble size={20}/>

                    {/*<Chip*/}
                    {/*    variant="filled"*/}
                    {/*    size="small"*/}
                    {/*    color="success"*/}
                    {/*    label="1"*/}
                    {/*/>*/}

                </Stack>

            </Stack>

        </Box>
    )
}

const Conversations = () => {

    const listRef = useRef();
    const sizeMap = useRef({});
    const {language} = useSelector(state => state.setting.appearance);

    const setSize = useCallback((index, size) => {
        sizeMap.current = {...sizeMap.current, [index]: size};
        listRef.current.resetAfterIndex(index);
    }, []);

    const getSize = index => sizeMap.current[index] || 100;

    return (
        <AutoSizer
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                height: "calc(100dvh - 140px)",
            }}
        >
            {
                ({height, width}) => (
                    <List
                        ref={listRef}
                        direction={language === "fa" ? "rtl" : "ltr"}
                        width={width}
                        height={height}
                        itemCount={conversationList.length}
                        itemSize={getSize}
                        className="remove-scrollbar"
                    >
                        {
                            ({index, style}) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        ...style,
                                    }}
                                >
                                    <ConversationItem
                                        index={index}
                                        conversationItem={conversationList[index]}
                                        setSize={setSize}
                                    />
                                </div>
                            )
                        }
                    </List>
                )
            }
        </AutoSizer>
    )
}

export default Conversations;

