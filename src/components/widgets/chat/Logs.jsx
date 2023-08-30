// libraries
import {useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Box, Card, Chip, Grid, IconButton, Menu, MenuItem, Stack, Typography} from "@mui/material";
import {FaPlay} from "react-icons/fa";
import {BiCheckDouble} from "react-icons/bi";
import {LuDownload, LuTrash2} from "react-icons/lu";

// components
import {useContextMenu} from "../../hooks/useContextMenu";
import ImagePreviewModal from "./ImagePreviewModal";
import MusicPlayerModal from "./MusicPlayerModal";
import VideoPlayerModal from "./VideoPlayerModal";

// utils
import {convertByte} from "../../../utils/functions";

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
                }}
            >

                <LuTrash2 size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
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

    const {contextMenu, _handleShowMenu, _handleHideMenu} = useContextMenu();

    const [showModal, setShowModal] = useState(false);

    const _handleShowModal = () => setShowModal(true);
    const _handleHideModal = () => setShowModal(false);

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
                    padding: 1.5,
                }}
                onContextMenu={_handleShowMenu}
            >

                <LogMenu
                    contextMenu={contextMenu}
                    isOpen={contextMenu !== null}
                    onClose={_handleHideMenu}
                />

                <Box
                    sx={{
                        position: "relative",
                        cursor: "pointer"
                    }}
                    onClick={_handleShowModal}
                >

                    <LazyLoadImage
                        src={log.content}
                        alt="image"
                        width="100%"
                        height="100%"
                        style={{borderRadius: 8}}
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

            <ImagePreviewModal
                isOpen={showModal}
                onClose={_handleHideModal}
            />

        </Grid>
    )
}

export const FileLog = ({log}) => {

    const {contextMenu, _handleShowMenu, _handleHideMenu} = useContextMenu();

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
                    padding: 1.5,
                }}
                onContextMenu={_handleShowMenu}
            >

                <LogMenu
                    contextMenu={contextMenu}
                    isOpen={contextMenu !== null}
                    onClose={_handleHideMenu}
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

    const {contextMenu, _handleShowMenu, _handleHideMenu} = useContextMenu();

    const [showModal, setShowModal] = useState(false);

    const _handleShowModal = () => setShowModal(true);
    const _handleHideModal = () => setShowModal(false);

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
                    padding: 1.5,
                }}
                onContextMenu={_handleShowMenu}
            >

                <LogMenu
                    contextMenu={contextMenu}
                    isOpen={contextMenu !== null}
                    onClose={_handleHideMenu}
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
                        <FaPlay size={20}/>
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
                isOpen={showModal}
                onClose={_handleHideModal}
            />

        </Grid>
    )
}

export const VideoLog = ({log}) => {

    const {contextMenu, _handleShowMenu, _handleHideMenu} = useContextMenu();

    const [showModal, setShowModal] = useState(false);

    const _handleShowModal = () => setShowModal(true);
    const _handleHideModal = () => setShowModal(false);

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
                    padding: 1.5,
                }}
                onContextMenu={_handleShowMenu}
            >

                <LogMenu
                    contextMenu={contextMenu}
                    isOpen={contextMenu !== null}
                    onClose={_handleHideMenu}
                />

                <Box sx={{position: "relative"}}>

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
                        <FaPlay size={20}/>
                    </IconButton>

                </Box>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
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
                isOpen={showModal}
                onClose={_handleHideModal}
            />

        </Grid>
    )
}

export const LocationLog = ({log}) => {

    const {contextMenu, _handleShowMenu, _handleHideMenu} = useContextMenu();

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
                    padding: 1,
                }}
                onContextMenu={_handleShowMenu}
            >

                <LogMenu
                    contextMenu={contextMenu}
                    isOpen={contextMenu !== null}
                    onClose={_handleHideMenu}
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

