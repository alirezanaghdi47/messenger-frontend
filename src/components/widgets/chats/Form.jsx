// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Stack} from "@mui/material";

// components
import TextInput from "../../modules/TextInput";
import AvatarInput from "../../modules/AvatarInput";

// utils
import {addGroupSchema} from "../../../utils/validations";

const Form = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            avatar: {},
            name: "",
            biography: "",
        },
        validationSchema: addGroupSchema,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Stack
            direction="column"
            gap={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                width: "100%"
            }}
        >

            <AvatarInput
                label={t("input.avatar")}
                name="avatar"
                // preview={session?.user?.avatar}
                value={formik.values.avatar}
                onChange={(value) => formik.setFieldValue("avatar", value)}
                onBlur={() => formik.setFieldTouched("avatar")}
                touched={formik.touched.avatar}
                error={formik.errors.avatar}
            />

            <TextInput
                label={t("input.groupName")}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("name")}
                error={formik.errors.name}
                touched={formik.touched.name}
            />

            <TextInput
                label={t("input.biography")}
                name="biography"
                rows={6}
                value={formik.values.biography}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("biography")}
                error={formik.errors.biography}
                touched={formik.touched.biography}
            />

        </Stack>
    )
}

export default Form;