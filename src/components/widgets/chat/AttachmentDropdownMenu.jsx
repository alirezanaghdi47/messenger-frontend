// libraries
import {forwardRef, useContext, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next"
import {v4 as uuidv4} from 'uuid';
import {Menu, MenuItem, Typography} from "@mui/material";
import toast from "react-hot-toast";
import {FiFile, FiFilm, FiImage, FiMusic} from "react-icons/fi";

// providers
import {SocketContext} from "providers/SocketProvider";

// stores
import {
    useAddFileMessageMutation,
    useAddImageMessageMutation,
    useAddMusicMessageMutation,
    useAddVideoMessageMutation
} from "stores/apis/messageApi";
import {
    insertMessage,
    removeMessage,
    setQueueMessage,
    unSetQueueMessage
} from "stores/slices/chatSlice";

const AttachmentDropdownMenuItem = forwardRef(({label, icon, acceptType, onClick, onChange}, ref) => {

    const {t} = useTranslation();

    return (
        <MenuItem
            sx={{
                display: "flex",
                gap: 1,
                justifyContent: "start",
                alignItems: "center",
                color: "ternary.main"
            }}
            onClick={onClick}
        >

            <input
                ref={ref}
                type="file"
                accept={acceptType}
                onChange={onChange}
                style={{display: "none"}}
            />

            {icon}

            <Typography
                variant="body2"
                color="textSecondary"
                fontWeight='bold'
            >
                {t(label)}
            </Typography>

        </MenuItem>
    )
});

const AttachmentDropdownMenu = ({anchorEl, isOpen, onClose}) => {

    const fileRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);
    const musicRef = useRef(null);
    const dispatch = useDispatch();
    const {_id, avatar} = useSelector(state => state.setting.profile);
    const {language} = useSelector(state => state.setting.appearance);
    const {activeChat, queueMessage} = useSelector(state => state.chat);
    const [addFileMessage, addFileResponse] = useAddFileMessageMutation();
    const [addImageMessage, addImageResponse] = useAddImageMessageMutation();
    const [addVideoMessage, addVideoResponse] = useAddVideoMessageMutation();
    const [addMusicMessage, addMusicResponse] = useAddMusicMessageMutation();
    const {t} = useTranslation();
    const {socket} = useContext(SocketContext);

    useEffect(() => {
        if (addFileResponse.status === "fulfilled") {
            dispatch(removeMessage(queueMessage?._id));
            dispatch(unSetQueueMessage());
            socket?.current?.emit("addMessage", {
                message: addFileResponse.data,
                chatId: activeChat?._id,
            });

            dispatch(insertMessage(addFileResponse.data));
        }
    }, [addFileResponse]);

    useEffect(() => {
        if (addImageResponse.status === "fulfilled") {
            dispatch(removeMessage(queueMessage?._id));
            dispatch(unSetQueueMessage());
            socket?.current?.emit("addMessage", {
                message: addImageResponse.data,
                chatId: activeChat?._id,
            });

            dispatch(insertMessage(addImageResponse.data));
        }
    }, [addImageResponse]);

    useEffect(() => {
        if (addVideoResponse.status === "fulfilled") {
            dispatch(removeMessage(queueMessage?._id));
            dispatch(unSetQueueMessage());
            socket?.current?.emit("addMessage", {
                message: addVideoResponse.data,
                chatId: activeChat?._id,
            });

            dispatch(insertMessage(addVideoResponse.data));
        }
    }, [addVideoResponse]);

    useEffect(() => {
        if (addMusicResponse.status === "fulfilled") {
            dispatch(removeMessage(queueMessage?._id));
            dispatch(unSetQueueMessage());
            socket?.current?.emit("addMessage", {
                message: addMusicResponse.data,
                chatId: activeChat?._id,
            });

            dispatch(insertMessage(addMusicResponse.data));
        }
    }, [addMusicResponse]);

    const _handleSendFile = async (e) => {
        const file = await e.target.files[0];

        if (file.size > 50 * 1_024_000) {
            toast.error(t("error.fileMaxSize"));
        } else {
            const tempMessage = {
                _id: uuidv4(),
                type: 6,
                name: file.name,
                size: file.size,
                progress: 0,
                userId: {_id, avatar}
            };

            dispatch(setQueueMessage(tempMessage));
            dispatch(insertMessage(tempMessage));
            addFileMessage({file, chatId: activeChat?._id, userId: _id});
            onClose();
        }

        fileRef.current.value = null;
    }

    const _handleSendImage = async (e) => {
        const image = await e.target.files[0];

        if (image.size > 5 * 1_024_000) {
            toast.error(t("error.imageMaxSize"));
        } else {
            const tempMessage = {
                _id: uuidv4(),
                type: 6,
                name: image.name,
                size: image.size,
                progress: 0,
                userId: {_id, avatar}
            };

            dispatch(setQueueMessage(tempMessage));
            dispatch(insertMessage(tempMessage));
            addImageMessage({image, chatId: activeChat?._id, userId: _id});
            onClose();
        }

        imageRef.current.value = null;
    }

    const _handleSendVideo = async (e) => {
        const video = await e.target.files[0];

        if (video.size > 25 * 1_024_000) {
            toast.error(t("error.videoMaxSize"));
        } else {
            const tempMessage = {
                _id: uuidv4(),
                type: 6,
                name: video.name,
                size: video.size,
                progress: 0,
                userId: {_id, avatar}
            };

            dispatch(setQueueMessage(tempMessage));
            dispatch(insertMessage(tempMessage));
            addVideoMessage({video, chatId: activeChat?._id, userId: _id});
            onClose();
        }

        videoRef.current.value = null;
    }

    const _handleSendMusic = async (e) => {
        const music = await e.target.files[0];

        if (music.size > 5 * 1_024_000) {
            toast.error(t("error.musicMaxSize"));
        } else {
            const tempMessage = {
                _id: uuidv4(),
                type: 6,
                name: music.name,
                size: music.size,
                progress: 0,
                userId: {_id, avatar}
            };

            dispatch(setQueueMessage(tempMessage));
            dispatch(insertMessage(tempMessage));
            addMusicMessage({music, chatId: activeChat?._id, userId: _id});
            onClose();
        }

        musicRef.current.value = null;
    }

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: language === "en" ? 'left' : 'right',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: language === "en" ? 'left' : 'right',
            }}
            open={isOpen}
            onClose={onClose}
        >

            <AttachmentDropdownMenuItem
                ref={fileRef}
                label="menu.file"
                icon={<FiFile size={20}/>}
                acceptType="application/pdf"
                onClick={() => fileRef.current.click()}
                onChange={_handleSendFile}
            />
            <AttachmentDropdownMenuItem
                ref={imageRef}
                label="menu.image"
                icon={<FiImage size={20}/>}
                acceptType="image/*"
                onClick={() => imageRef.current.click()}
                onChange={_handleSendImage}
            />
            <AttachmentDropdownMenuItem
                ref={videoRef}
                label="menu.video"
                icon={<FiFilm size={20}/>}
                acceptType="video/*"
                onClick={() => videoRef.current.click()}
                onChange={_handleSendVideo}
            />
            <AttachmentDropdownMenuItem
                ref={musicRef}
                label="menu.music"
                icon={<FiMusic size={20}/>}
                acceptType="audio/*"
                onClick={() => musicRef.current.click()}
                onChange={_handleSendMusic}
            />

        </Menu>
    )
}

export default AttachmentDropdownMenu;

