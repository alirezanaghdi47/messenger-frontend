// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {IconButton, Stack} from "@mui/material";
import {LuMic, LuSend} from "react-icons/lu";

// components
import TextInput from "@/components/modules/TextInput.jsx";
import Attachment from "@/components/widgets/home/Attachment.jsx";
import Emoji from "@/components/widgets/home/Emoji.jsx";

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
                zIndex: 100,
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

            <IconButton
                varinat="text"
                color="ternary"
            >
                <LuMic size={20}/>
            </IconButton>

            <Attachment/>

            <TextInput
                name="message"
                placeholder={t("input.message")}
                startIcon={<Emoji/>}
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

