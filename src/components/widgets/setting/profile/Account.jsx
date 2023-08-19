// libraries
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {Grid} from "@mui/material";

// components
import TextInput from "../../../modules/TextInput.jsx";
import AvatarInput from "../../../modules/AvatarInput.jsx";

// utils
import {editProfileSchema} from "../../../../utils/validations.js";

const Account = () => {

    const {t} = useTranslation();

    const formik = useFormik({
        initialValues: {
            avatar: {},
            firstName: "",
            lastName: "",
            userName: "",
            phoneNumber: "",
            birthDay: "",
        },
        validationSchema: editProfileSchema,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <Grid
            container
            spacing={4}
            sx={{
                width: "100%",
                padding: 2,
                overflowY: "auto",
            }}
            className="remove-scrollbar"
        >

            <Grid
                item
                xs={12}
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

            </Grid>

            <Grid
                item
                xs={12}
                sm={6}
            >

                <TextInput
                    label={t("input.firstName")}
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("firstName")}
                    error={formik.errors.firstName}
                    touched={formik.touched.firstName}
                />

            </Grid>

            <Grid
                item
                xs={12}
                sm={6}
            >

                <TextInput
                    label={t("input.lastName")}
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("lastName")}
                    error={formik.errors.lastName}
                    touched={formik.touched.lastName}
                />

            </Grid>

            <Grid
                item
                xs={12}
            >

                <TextInput
                    label={t("input.userName")}
                    name="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("userName")}
                    error={formik.errors.userName}
                    touched={formik.touched.userName}
                />

            </Grid>

            <Grid
                item
                xs={12}
            >

                <TextInput
                    label={t("input.phoneNumber")}
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("phoneNumber")}
                    error={formik.errors.phoneNumber}
                    touched={formik.touched.phoneNumber}
                />

            </Grid>

            <Grid
                item
                xs={12}
            >

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

            </Grid>

        </Grid>
    )
}

export default Account;

