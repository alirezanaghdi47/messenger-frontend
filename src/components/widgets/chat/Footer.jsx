// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Stack} from "@mui/material";
import {FiSend} from "react-icons/fi";

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

            <Attachment/>

            <TextInput
                color="primary"
                size="small"
                name="message"
                placeholder={t("input.message")}
                icon={<FiSend size={20}/>}
                iconPosition="end"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.errors.message}
            />

        </Stack>
    )
}

export default Footer;

