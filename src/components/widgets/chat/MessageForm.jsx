// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {toast} from "react-hot-toast";
import {IconButton} from "@mui/material";
import {LuSend, LuSmile} from "react-icons/lu";

// components
import TextInput from "components/modules/TextInput";

// stores
import {useAddTextMessageMutation} from "stores/apis/messageApi";

const MessageForm = ({data}) => {

    const [addTextMessage, response] = useAddTextMessageMutation();
    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            text: "",
        },
        onSubmit: async (result, {resetForm}) => {
            addTextMessage({text: result.text, chatId: data?._id});
            resetForm();
        }
    });

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
            error={formik.errors.text}
        />
    )
}

export default MessageForm;