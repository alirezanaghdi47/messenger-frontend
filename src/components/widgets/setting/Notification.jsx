// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Stack} from "@mui/material";

// component
import SwitchBox from "@/components/modules/SwitchBox.jsx";

const Notification = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            chat: false,
            group: false,
            status: false,
            vibrate: false,
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Stack
            direction="column"
            gap={4}
            sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                padding: 4,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            <SwitchBox
                name="chat"
                label={t("list.chat")}
                value={formik.values.chat}
                onChange={formik.handleChange}
                touched={formik.touched.chat}
                error={formik.errors.chat}
            />

            <SwitchBox
                name="group"
                label={t("list.group")}
                value={formik.values.group}
                onChange={formik.handleChange}
                touched={formik.touched.group}
                error={formik.errors.group}
            />

            <SwitchBox
                name="status"
                label={t("list.status")}
                value={formik.values.status}
                onChange={formik.handleChange}
                touched={formik.touched.status}
                error={formik.errors.status}
            />

            <SwitchBox
                name="vibrate"
                label={t("list.vibrate")}
                value={formik.values.vibrate}
                onChange={formik.handleChange}
                touched={formik.touched.vibrate}
                error={formik.errors.vibrate}
            />

        </Stack>
    )
}

export default Notification;

