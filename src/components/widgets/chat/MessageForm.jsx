// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton} from "@mui/material";
import {LuSend} from "react-icons/lu";

// components
import TextInput from "components/modules/TextInput";
import EmojiPicker from "components/widgets/chat/EmojiPicker";

const MessageForm = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            message: "",
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <>
            <EmojiPicker
                message={formik.values.message}
                setMessage={(value) => formik.setFieldValue("message", value)}
            />

            <TextInput
                name="message"
                placeholder={t("input.message")}
                endIcon={
                    <IconButton
                        varinat="text"
                        color="ternary"
                        onClick={formik.handleSubmit}
                    >
                        <LuSend size={20}/>
                    </IconButton>
                }
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.errors.message}
            />
        </>
    )
}

export default MessageForm;