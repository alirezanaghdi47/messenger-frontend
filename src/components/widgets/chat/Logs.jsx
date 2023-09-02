// libraries
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Card, Chip, Grid, IconButton, Menu, MenuItem, Stack, Typography} from "@mui/material";
import {BiCheckDouble} from "react-icons/bi";
import {LuDownload, LuTrash2, LuPlay} from "react-icons/lu";

// components
import {useContextMenu} from "components/hooks/useContextMenu";
import {useModal} from "components/hooks/useModal";
import ImagePreviewModal from "components/widgets/chat/ImagePreviewModal";
import MusicPlayerModal from "components/widgets/chat/MusicPlayerModal";
import VideoPlayerModal from "components/widgets/chat/VideoPlayerModal";

// utils
import {convertByte} from "utils/functions";

const LogMenu = ({contextMenu, isOpen, onClose}) => {

    const {t} = useTranslation();

    return (
        <Menu
            open={isOpen}
            onClose={onClose}
            anchorReference="anchorPosition"
            anchorPosition={
                isOpen
                    ? {top: contextMenu.mouseY, left: contextMenu.mouseX}
                    : undefined
            }
        >

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "error.main"
                }}
            >

                <LuTrash2 size={20}/>

                <Typography
                    variant="body2"
                    color="error"
                    fontWeight='bold'
                >
                    {t("menu.delete")}
                </Typography>

            </MenuItem>

            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >

                <LuDownload size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.download")}
                </Typography>

            </MenuItem>

        </Menu>
    )
}

export const ImageLog = ({log}) => {

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();
    const {isOpenModal , _handleShowModal , _handleHideModal} = useModal();

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    position: "relative",
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    bgcolor: "secondary.main",
                    padding: 1.5,
                }}
                elevation={0}
                onContextMenu={_handleShowContextMenu}
            >

                <LogMenu
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
                        src={log.content}
                        alt="image"
                        width="100%"
                        height="100%"
                        style={{borderRadius: 8}}
                        onClick={_handleShowModal}
                    />

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
                            color="secondary"
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
                        color: "text.secondary"
                    }}
                >

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                    <BiCheckDouble size={20}/>

                </Stack>

            </Card>

            <ImagePreviewModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </Grid>
    )
}

export const FileLog = ({log}) => {

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    bgcolor: "secondary.main",
                    padding: 1.5,
                }}
                elevation={0}
                onContextMenu={_handleShowContextMenu}
            >

                <LogMenu
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
                        color: "text.secondary"
                    }}
                >

                    <LazyLoadImage
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"
                        alt="image"
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
                            color: "text.primary"
                        }}
                    >

                        <Typography
                            variant="subtitle2"
                            color="textPrimary"
                        >
                            نام فایل
                        </Typography>

                        <Typography
                            variant="caption"
                            color="textPrimary"
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
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

        </Grid>
    )
}

export const MusicLog = ({log}) => {

    const {language} = useSelector(state => state.setting.appearance);

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();
    const {isOpenModal , _handleShowModal , _handleHideModal} = useModal();

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    bgcolor: "secondary.main",
                    padding: 1.5,
                }}
                elevation={0}
                onContextMenu={_handleShowContextMenu}
            >

                <LogMenu
                    contextMenu={contextMenu}
                    isOpen={contextMenu !== null}
                    onClose={_handleHideContextMenu}
                />

                <Stack
                    direction="row"
                    gap={2}
                    sx={{
                        display: "flex",
                        justifyContent: language === "fa" ? "end" : "start",
                        alignItems: "center",
                        width: "100%"
                    }}
                >

                    <IconButton
                        variant="contained"
                        color="secondary"
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
                            color="textPrimary"
                        >
                            00:10 / 00:00
                        </Typography>

                        <Typography
                            variant="caption"
                            color="textPrimary"
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
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

            <MusicPlayerModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </Grid>
    )
}

export const VideoLog = ({log}) => {

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();
    const {isOpenModal , _handleShowModal , _handleHideModal} = useModal();

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    bgcolor: "secondary.main",
                    padding: 1.5,
                }}
                elevation={0}
                onContextMenu={_handleShowContextMenu}
            >

                <LogMenu
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
                        src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"
                        alt="image"
                        width="100%"
                        height="100%"
                        style={{borderRadius: 8}}
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
                            color="secondary"
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
                            color="secondary"
                            size="small"
                            label={convertByte(300000)}
                        />

                    </Box>

                    <IconButton
                        variant="contained"
                        color="secondary"
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
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

            <VideoPlayerModal
                isOpen={isOpenModal}
                onClose={_handleHideModal}
            />

        </Grid>
    )
}

export const LocationLog = ({log}) => {

    const {contextMenu, _handleShowContextMenu, _handleHideContextMenu} = useContextMenu();

    const _handleShowDetail = () => {
        window.location.href = `https://www.google.com/maps/search/${log.content[0]},${log.content[1]}`;
    }

    return (
        <Grid
            component="li"
            item
            xs={12}
            sm={6}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Card
                sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "start",
                    width: "100%",
                    bgcolor: "secondary.main",
                    padding: 1.5,
                }}
                elevation={0}
                onContextMenu={_handleShowContextMenu}
            >

                <LogMenu
                    contextMenu={contextMenu}
                    isOpen={contextMenu !== null}
                    onClose={_handleHideContextMenu}
                />

                <LazyLoadImage
                    src="https://messenger-alirezanaghdi.s3.ir-thr-at1.arvanstorage.ir/lorem-ipsum.jpg"
                    alt="image"
                    width="100%"
                    height="100%"
                    style={{
                        borderRadius: 8,
                        cursor: "pointer"
                    }}
                    onClick={_handleShowDetail}
                />

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        direction: "rtl",
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        width: "100%",
                        color: "text.secondary"
                    }}
                >

                    <BiCheckDouble size={20}/>

                    <Typography
                        variant="caption"
                        color="textSecondary"
                    >
                        11:11 | 1400/1/1
                    </Typography>

                </Stack>

            </Card>

        </Grid>
    );
}

