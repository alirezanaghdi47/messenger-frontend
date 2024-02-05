// libraries
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton} from "@mui/material";
import {LuSend} from "react-icons/lu";

// components
import TextInput from "components/modules/TextInput";
import EmojiPicker from "components/widgets/chat/EmojiPicker";

// providers
import {SocketContext} from "providers/SocketProvider";

// stores
import {useAddTextMessageMutation} from "stores/apis/messageApi";
import {insertMessage} from "stores/slices/chatSlice";

// utils
import {addTextMessageSchema} from "utils/validations";

const MessageForm = ({messagesCount, listRef}) => {

    const [isTyping, setIsTyping] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const {_id} = useSelector(state => state.setting.profile);
    const {activeChat} = useSelector(state => state.chat);
    const [addTextMessage, addTextMessageResponse] = useAddTextMessageMutation();
    const {t} = useTranslation();
    const {socket} = useContext(SocketContext);

    useEffect(() => {
        if (addTextMessageResponse.status === "fulfilled") {
            socket?.current?.emit("addMessage", {
                message: addTextMessageResponse.data,
                chatId: activeChat?._id,
            });

            dispatch(insertMessage(addTextMessageResponse.data));

            setTimeout(() => {
                listRef?.current?.scrollToIndex({
                    index: messagesCount,
                    align: "bottom",
                    behavior: "auto"
                });
            } , 150);
        }
    }, [addTextMessageResponse]);

    const formik = useFormik({
        initialValues: {
            text: "",
        },
        validationSchema: addTextMessageSchema,
        onSubmit: async (result, {resetForm}) => {
            addTextMessage({text: result.text, chatId: activeChat?._id});
            resetForm();
        }
    });

    const _handleKeyDown = (e) => {
        if (!isTyping) {
            socket?.current?.emit('startTyping', {
                userId: _id,
                chatId: params.chatId,
                socketId: socket?.current?.id
            });
            setIsTyping(true);
        }

        let lastTypingTime = new Date().getTime();
        let timer = 2000;

        setTimeout(() => {
            let timeNow = new Date().getTime();
            let timeDifference = timeNow - lastTypingTime;
            if (timeDifference >= timer) {
                socket?.current?.emit('stopTyping', {
                    userId: _id,
                    chatId: params.chatId,
                    socketId: socket?.current?.id
                });
                setIsTyping(false);
            }
        }, timer);
    }

    useEffect(() => {
        return () => formik.handleReset();
    }, [params.chatId]);

    return (
        <>
            <EmojiPicker
                text={formik.values.text}
                setText={(value) => formik.setFieldValue("text", value)}
            />

            <TextInput
                name="text"
                placeholder={t("input.text")}
                endIcon={
                    <IconButton
                        varinat="text"
                        color="ternary"
                        onClick={formik.handleSubmit}
                    >
                        <LuSend size={20}/>
                    </IconButton>
                }
                value={formik.values.text}
                onChange={formik.handleChange}
                onKeyDown={_handleKeyDown}
                error={formik.errors.text}
            />
        </>
    )
}

export default MessageForm;