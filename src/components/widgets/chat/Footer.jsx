// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton, Stack} from "@mui/material";
import {LuSend} from "react-icons/lu";

// components
import TextInput from "../../modules/TextInput.jsx";
import Attachment from "./Attachment.jsx";
import VoiceRecorder from "./VoiceRecorder";

const Footer = () => {

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
        <Stack
            direction="row"
            gap={1}
            sx={{
                position: "absolute",
                zIndex: 100,
                bottom: 0,
                left: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 80,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <VoiceRecorder/>

            <Attachment/>

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

        </Stack>
    )
}

export default Footer;

