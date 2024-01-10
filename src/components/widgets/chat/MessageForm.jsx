// libraries
import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {toast} from "react-hot-toast";
import {IconButton} from "@mui/material";
import {LuSend, LuSmile} from "react-icons/lu";

// components
import TextInput from "components/modules/TextInput";

// providers
import {SocketContext} from "providers/Socket";

// stores
import {useAddTextMessageMutation} from "stores/apis/messageApi";

const MessageForm = () => {

    const {socket} = useContext(SocketContext);
    const params = useParams();
    const {_id} = useSelector(state => state.setting.profile);
    const {activeChat} = useSelector(state => state.chat);
    const [addTextMessage, addTextMessageResponse] = useAddTextMessageMutation();
    const {t} = useTranslation();

    useEffect(() => {
        if (addTextMessageResponse.status === "fulfilled"){
            socket?.current?.emit("addMessage", {
                message: addTextMessageResponse.data,
                chatId: activeChat?._id,
            });
        }
    }, [addTextMessageResponse]);

    const formik = useFormik({
        initialValues: {
            text: "",
        },
        onSubmit: async (result, {resetForm}) => {
            addTextMessage({text: result.text, chatId: activeChat?._id});
            resetForm();
        }
    });

    useEffect(() => {
        return () => formik.handleReset();
    }, [params.chatId]);

    return (
        <TextInput
            name="text"
            placeholder={t("input.text")}
            startIcon={
                <IconButton
                    varinat="text"
                    color="ternary"
                    onClick={() => toast.success(t("typography.comingSoon"))}
                >
                    <LuSmile size={20}/>
                </IconButton>
            }
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
            onKeyDown={(e) => {
                socket?.current?.emit('startTyping', {userId: _id , chatId: params.chatId , socketId: socket?.current?.id});
                let lastTypingTime = new Date().getTime();
                let timer = 2000;
                setTimeout(() => {
                    let timeNow = new Date().getTime();
                    let timeDifference = timeNow - lastTypingTime;
                    if (timeDifference >= timer){
                        socket?.current?.emit('stopTyping', {userId: _id , chatId: params.chatId , socketId: socket?.current?.id});
                    }
                } , timer);
            }}
            error={formik.errors.text}
        />
    )
}

export default MessageForm;