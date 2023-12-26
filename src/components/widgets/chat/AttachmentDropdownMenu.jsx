// libraries
import {useRef} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next"
import {Menu, MenuItem, Typography} from "@mui/material";
import toast from "react-hot-toast";
import {FiFile, FiFilm, FiImage, FiMapPin, FiMusic} from "react-icons/fi";

// stores
import {
    useAddFileMessageMutation, useAddImageMessageMutation,
    useAddLocationMessageMutation, useAddMusicMessageMutation,
    useAddVideoMessageMutation
} from "stores/apis/messageApi";

const AttachmentDropdownMenu = ({anchorEl, isOpen, onClose}) => {

    const fileRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);
    const musicRef = useRef(null);
    const {activeChat} = useSelector(state => state.chat);
    const [addFileMessage] = useAddFileMessageMutation();
    const [addImageMessage] = useAddImageMessageMutation();
    const [addMusicMessage] = useAddMusicMessageMutation();
    const [addVideoMessage] = useAddVideoMessageMutation();
    const [addLocationMessage] = useAddLocationMessageMutation();
    const {t} = useTranslation();

    const _handleSendFile = async (e) => {

        const file = await e.target.files[0];

        if (file.size > 50 * 1_024_000) {
            toast.error(t("error.fileMaxSize"));
        } else {
            onClose();
            addFileMessage({file, chatId: activeChat?._id});
        }

        fileRef.current.value = null;

    }

    const _handleSendImage = async (e) => {

        const image = await e.target.files[0];

        if (image.size > 5 * 1_024_000) {
            toast.error(t("error.imageMaxSize"));
        } else {
            onClose();
            addImageMessage({image, chatId: activeChat?._id});
        }

        imageRef.current.value = null;

    }

    const _handleSendVideo = async (e) => {

        const video = await e.target.files[0];

        if (video.size > 10 * 1_024_000) {
            toast.error(t("error.videoMaxSize"));
        } else {
            onClose();
            addVideoMessage({video, chatId: activeChat?._id});
        }

        videoRef.current.value = null;

    }

    const _handleSendMusic = async (e) => {

        const music = await e.target.files[0];

        if (music.size > 5 * 1_024_000) {
            toast.error(t("error.videoMaxSize"));
        } else {
            onClose();
            addMusicMessage({music, chatId: activeChat?._id});
        }

        musicRef.current.value = null;

    }

    const _handleSendLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res) => {
                onClose();
                addLocationMessage({location: res.coords.latitude, chatId: activeChat?._id});
            }, (err) => {
                toast.error(t("error.geoLocationFailed"));
            });
        } else {
            toast.error(t("error.geoLocationNotSupport"));
        }
    }

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isOpen}
            onClose={onClose}
        >

            {/* file */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => fileRef.current.click()}
            >

                <input
                    ref={fileRef}
                    type="file"
                    accept="application/pdf"
                    onChange={_handleSendFile}
                    style={{display: "none"}}
                />

                <FiFile size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.file")}
                </Typography>

            </MenuItem>

            {/* image */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => imageRef.current.click()}
            >

                <input
                    ref={imageRef}
                    type="file"
                    accept="image/*"
                    onChange={_handleSendImage}
                    style={{display: "none"}}
                />

                <FiImage size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.image")}
                </Typography>

            </MenuItem>

            {/* video */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => videoRef.current.click()}
            >

                <input
                    ref={videoRef}
                    type="file"
                    accept="video/*"
                    onChange={_handleSendVideo}
                    style={{display: "none"}}
                />

                <FiFilm size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.video")}
                </Typography>

            </MenuItem>

            {/* music */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={() => musicRef.current.click()}
            >

                <input
                    ref={musicRef}
                    type="file"
                    accept="audio/*"
                    onChange={_handleSendMusic}
                    style={{display: "none"}}
                />

                <FiMusic size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.music")}
                </Typography>

            </MenuItem>

            {/* location */}
            <MenuItem
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "start",
                    alignItems: "center",
                    color: "ternary.main"
                }}
                onClick={_handleSendLocation}
            >

                <FiMapPin size={20}/>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight='bold'
                >
                    {t("menu.location")}
                </Typography>

            </MenuItem>

        </Menu>
    )
}

export default AttachmentDropdownMenu;

