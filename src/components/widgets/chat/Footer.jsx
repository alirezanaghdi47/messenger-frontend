// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton, Stack} from "@mui/material";
import {LuLaugh, LuMic, LuSend} from "react-icons/lu";

// components
import TextInput from "@/components/modules/TextInput.jsx";
import Attachment from "@/components/widgets/chat/Attachment.jsx";

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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 70,
                bgcolor: "background.paper",
                boxShadow: 1,
                padding: 2
            }}
        >

            <IconButton
                varinat="text"
                color="secondary"
            >
                <LuMic size={20}/>
            </IconButton>

            <Attachment/>

            <IconButton
                varinat="text"
                color="secondary"
            >
                <LuLaugh size={20}/>
            </IconButton>

            <TextInput
                color="primary"
                size="small"
                name="message"
                placeholder={t("input.message")}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.errors.message}
            />

            <IconButton
                varinat="text"
                color="secondary"
                onClick={formik.handleSubmit}
            >
                <LuSend size={20}/>
            </IconButton>

        </Stack>
    )
}

export default Footer;

